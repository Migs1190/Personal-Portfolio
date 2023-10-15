/* eslint-disable react/no-unknown-property */
import "./styles/App.min.css";
import { Canvas } from "@react-three/fiber";
import AppNav from "./components/AppNav";
import CanvasMesh from "./components/Three/CanvasMesh";

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
				<AppNav />
				<Canvas>
					<ambientLight intensity={0.3} />
					<directionalLight color='white' position={[-10, 20, 10]} />
					<CanvasMesh />
				</Canvas>
			</div>
		</>
	);
};

export default App;
