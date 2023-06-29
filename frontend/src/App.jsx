import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Android from "./pages/Android";
import Ios from "./pages/Ios";
import Formulaire1 from "./components/Formulaire1";
import Formulaire2 from "./components/Formulaire2";
import Formulaire3 from "./components/Formulaire3";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/ajoute-un-appareil" element={<Survey />} />
        <Route path="/android" element={<Android />} />
        <Route path="/ios" element={<Ios />} />
        <Route path="/formulaire1" element={<Formulaire1 />} />
        <Route path="/formulaire2" element={<Formulaire2 />} />
        <Route path="formulaire3" element={<Formulaire3 />} />
      </Routes>
    </div>
  );
}

export default App;
