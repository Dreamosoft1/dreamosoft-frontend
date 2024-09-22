// import logo from "./assets/img/logo.svg";
import "./index.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <>
      <div className="App relative dark:bg-[#2C375A]">
        <NavBar />
        <ChatBot />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
