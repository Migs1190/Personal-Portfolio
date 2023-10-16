import { Html, useProgress } from "@react-three/drei";

const Loader = function () {
	const { progress } = useProgress();
	return <Html center>{progress} % loaded</Html>;
};
export default Loader;
