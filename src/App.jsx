// import logo from "./assets/img/logo.svg";
import "./index.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
	return (
		<>
			<div className="App">
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
