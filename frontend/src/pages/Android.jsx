import { useState } from "react";
import Navbar from "../components/Navbar";
import survey from "../styles/Survey.module.scss";

export default function Android() {
  const [imei, setImei] = useState("");

  const marques = [
    "Samsung",
    "Xiaomi",
    "Google",
    "Oppo",
    "Huawei",
    "OnePlus",
    "Realme",
    "Lg",
  ];

  const modeles = [
    "Lg Optimus ",
    "Ascend D1 Qwuad XL",
    "Ascend G525",
    "Boulder",
    "Oppo R819",
    "OnePlus 5 PRO",
    "Galaxy M ",
    "Redmi note 7",
  ];

  const couleurs = ["Rouge ", "Noir", "Blanc", "Rose", "Vert", "Jaune"];

  const filterInput = (event) => {
    setImei(event.target.value.replace(/\D/, ""));
  };

  return (
    <>
      <Navbar />

      <section className={survey.survey}>
        <h1>Formulaire Android</h1>
        <form action="#">
          <label htmlFor="lang">Marque</label>
          <select name="Marque" id="lang">
            {marques.map((marque) => (
              <option value={marque} key={marque}>
                {marque}
              </option>
            ))}
          </select>

          <label htmlFor="modele">Modèle</label>
          <select name="modele" id="modele">
            {modeles.map((modele) => (
              <option value={modele} key={modele}>
                {modele}
              </option>
            ))}
          </select>

          <label htmlFor="imei">Numéro IMEI</label>
          <input
            maxLength={13}
            type="text"
            id="imei"
            onChange={filterInput}
            value={imei}
          />

          <label htmlFor="couleur">Couleur</label>
          <select name="Couleur" id="couleur">
            {couleurs.map((couleur) => (
              <option value={couleur} key={couleur}>
                {couleur}
              </option>
            ))}
          </select>
        </form>
      </section>
    </>
  );
}
