import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Survey from "./pages/Survey";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Accueil" element={<Home />} />
        <Route path="/Ajoute-un-appareil" element={<Survey />} />
      </Routes>
    </div>
  );
}

export default App;
