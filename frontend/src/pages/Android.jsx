import { useState } from "react";
import Navbar from "../components/Navbar";
import survey from "../styles/Survey.module.scss";

export default function Android() {
  const [imei, setImei] = useState("");
  const [brand, setBrand] = useState("");

  const addPhone = (event) => {
    event.preventDefault();
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/phones`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ brand, imei }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Une erreur s'est produite lors de l'ajout du téléphone."
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message); // Afficher le message de réussite
      })
      .catch((error) => {
        console.error(error);
      });
  };

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

  const modeles = {
    Lg: ["Lg Optimus"],
    Samsung: ["Galaxy M"],
    Xiaomi: ["Mi10"],
    Google: ["Pixel 7"],
    Oppo: ["Reno8"],
    Huawei: ["P20"],
    OnePlus: ["Oneplus7T"],
    Realme: ["Realme C55"],
  };

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
          <select
            name="Marque"
            id="lang"
            onChange={(event) => {
              setBrand(event.target.value);
            }}
            value={brand}
          >
            <option>---</option>
            {marques.map((marque) => (
              <option value={marque} key={marque}>
                {marque}
              </option>
            ))}
          </select>

          <label htmlFor="modele">Modèle</label>
          <select name="modele" id="modele">
            {modeles[brand]?.map((modele) => (
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
        <button type="button" onClick={addPhone}>
          submit
        </button>
      </section>
    </>
  );
}
