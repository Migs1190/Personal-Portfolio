/* eslint-disable react/no-unknown-property */
import "./styles/App.min.css";
import { Canvas } from "@react-three/fiber";
import AppNav from "./components/AppNav";
import CanvasMesh from "./components/Three/CanvasMesh";
import AppHero from "./components/AppHero";
import AppCursor from "./components/AppCursor";
import AppBg from "./components/AppBg";
import AppProjects from "./components/AppProjects";

window.onload = () => {
	// document.
};
const App = () => {
	return (
		<>
			<div>
				{/* <AppLoader /> */}
				<AppBg />
				<AppCursor />
				<AppNav />
				<AppHero />
				<AppProjects />
			</div>
		</>
	);
};

export default App;
