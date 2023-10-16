import "../styles/AppCursor.min.css";
import React, { useRef } from "react";

const AppCursor = function () {
	const cursor = useRef();
	const secondary = `#9400ff`;

	window.onmousemove = (e) => {
		if (e.target.closest(`.interactable`)) {
			cursor.current.animate(
				{
					width: `25px`,
					height: `25px`,
					backgroundColor: "blue",
					mixBlendMode: `difference`,
				},
				{ duration: 200, fill: `forwards` }
			);
		} else {
			cursor.current.animate(
				{ width: `10px`, height: `10px`, backgroundColor: secondary, border: `none`, mixBlendMode: `normal` },
				{ duration: 200, fill: `forwards` }
			);
		}
		cursor.current.animate(
			{
				opacity: `1`,
				top: `${e.pageY}px`,
				left: `${e.pageX}px`,
			},
			{ duration: 800, fill: `forwards` }
		);
	};
	window.onscroll = () => {
		cursor.current.animate(
			{
				opacity: `0`,
			},
			{ duration: 500, fill: `forwards` }
		);
	};

	return <div id='cursor' ref={cursor}></div>;
};

export default AppCursor;
