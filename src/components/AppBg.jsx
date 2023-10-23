import React from "react";
import "../styles/AppBg.min.css";

const randomColor = () => {
	const hex = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", `D`, `E`, `F`];
	let temp = "";
	for (let i = 1; i < 7; i++) {
		temp += hex[Math.floor(Math.random() * hex.length)];
	}
	return temp;
};

setInterval(() => {
	document.body.style.setProperty(`--grid`, `#${randomColor()}`);
}, 1000);

export default function AppBg() {
	return (
		<div id='grid-container'>
			<div id='grid'></div>
		</div>
	);
}
