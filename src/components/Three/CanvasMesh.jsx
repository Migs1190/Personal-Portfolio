/* eslint-disable react/no-unknown-property */

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const CanvasMesh = function (props) {
	const objectRef = useRef();

	useFrame(({ clock }) => {
		objectRef.current.rotation.x = 2 * Math.cos(clock.getElapsedTime());
		objectRef.current.rotation.y = Math.sin(clock.getElapsedTime());
	});

	return (
		<>
			{/* <OrbitControls/> */}
			<mesh ref={objectRef}>
				<boxGeometry args={[3, 3, 3]} />
				<meshStandardMaterial color='#9400ff' />
			</mesh>
		</>
	);
};

export default CanvasMesh;
