/* eslint-disable react/no-unknown-property */

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const CanvasMesh = function (props) {
	const [color, setColor] = useState("gold");
	const objectRef = useRef();

	const colorPicker = () => {
		if (document.body.id === "dark") setColor("#gold");
		else setColor("gold");
	};

	// useFrame(({ clock }) => {
	// 	colorPicker();
	//     // console.log(objectRef.current);
	// 	objectRef.current.rotation.x = 0.4 * Math.cos(clock.getElapsedTime());
	// 	objectRef.current.rotation.y = 0.4 * Math.sin(clock.getElapsedTime());
	// });
	// TODO Enable this after you're done.

	return (
		<>
			<mesh ref={objectRef} rotation={[-1.5, 0, 0]}>
				<planeGeometry args={[20, 10]} />
				<meshStandardMaterial color={color} />
			</mesh>
		</>
	);
};

export default CanvasMesh;
