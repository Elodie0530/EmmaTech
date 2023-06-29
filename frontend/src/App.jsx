import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Survey from "./pages/Survey";

import Ios from "./pages/Ios";
import Stockage from "./pages/Stockage";
import Faq from "./pages/Faq";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/ajoute-un-appareil" element={<Survey />} />

        <Route path="/ios" element={<Ios />} />
        <Route path="/stockage" element={<Stockage />} />
        <Route path="/foire-aux-questions" element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;
