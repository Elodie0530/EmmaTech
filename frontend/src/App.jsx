import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Android from "./pages/Android";
import Ios from "./pages/Ios";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/ajoute-un-appareil" element={<Survey />} />
        <Route path="/android" element={<Android />} />
        <Route path="/ios" element={<Ios />} />
      </Routes>
    </div>
  );
}

export default App;
