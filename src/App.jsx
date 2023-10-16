/* eslint-disable react/no-unknown-property */
import "./styles/App.min.css";
// import { Canvas } from "@react-three/fiber";
import AppNav from "./components/AppNav";
// import CanvasMesh from "./components/Three/CanvasMesh";
import AppHero from "./components/AppHero";
import AppCursor from "./components/AppCursor";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";

const cnvs = document.querySelector(`canvas`);

window.onload = () => {
	console.log("started");
};
window.onresize = () => {
	cnvs.width = innerWidth;
	cnvs.height = innerHeight;
};
const App = () => {
	return (
		<>
			<div id='canvas-container'>
				<Suspense fallback={<Loader />}>
					<AppCursor />
					<AppNav />
					<AppHero />
					{/* <Canvas>
						<ambientLight intensity={0.3} />
						<directionalLight color='white' position={[-10, 20, 10]} />
						<CanvasMesh />
					</Canvas> */}
				</Suspense>
			</div>
		</>
	);
};

export default App;
