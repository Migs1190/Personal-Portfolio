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
				top: `${e.y}px`,
				left: `${e.x}px`,
			},
			{ duration: 800, fill: `forwards` }
		);
	};

	return <div id='cursor' ref={cursor}></div>;
};

export default AppCursor;
