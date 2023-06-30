import { useState } from "react";
import { Link } from "react-router-dom";
import { pink } from "@mui/material/colors";
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Checkbox,
} from "@mui/material";
import Navbar from "../components/Navbar";
import survey from "../styles/Survey.module.scss";

export default function Ios() {
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
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const marques = ["Apple"];

  const modeles = {
    Apple: [
      "Iphone 14",
      "Iphone 14 Pro",
      "Iphone 14 Pro Max",
      "Iphone 14 Pro Plus",
      "Iphone 13",
      "Iphone 13 Mini",
      "Iphone 13 Pro",
      "Iphone 12 Pro Plus",
      "Iphone 12",
      "Iphone 14 Pro",
      "Iphone 12 Pro Max",
      "Iphone 12 Mini",
    ],
  };
  const screens = ['4"', '5"', '6"', '7"', '8"', '9"'];
  const memorys = ["16 Go", "32 Go", "64 Go", "128 Go", "256 Go"];
  const rams = [
    "2 Go",
    "3 Go",
    "4 Go",
    "6 Go",
    "8 Go",
    "12 Go",
    "16 Go",
    "18 Go",
  ];
  const networks = ["4G", "5G"];
  const states = [
    "DEEE",
    "Réparable",
    "Bloqué",
    "Reconditionable",
    "Reconditionné",
  ];

  const couleurs = ["Blanc", "Jaune", "Noir", "Rose", "Rouge ", "Vert"];

  const filterInput = (event) => {
    setImei(event.target.value.replace(/\D/, ""));
  };

  return (
    <>
      <Navbar />

      <section className={survey.survey}>
        <h1>Formulaire IOS</h1>
        <form className={survey.formulaire} action="#">
          <FormControl
            required
            className={survey.cat1}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <TextField
              required
              maxLength={13}
              type="text"
              id="imei"
              onChange={filterInput}
              value={imei}
              variant="standard"
              label="Numéro IMEI"
            />
          </FormControl>

          <FormControl
            required
            className={survey.cat2}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel htmlFor="lang">Marque</InputLabel>
            <Select
              name="Marque"
              id="lang"
              onChange={(event) => {
                setBrand(event.target.value);
              }}
              value={brand}
            >
              {marques.map((marque) => (
                <MenuItem value={marque} key={marque}>
                  {marque}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            required
            className={survey.cat3}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel htmlFor="modele">Modèle</InputLabel>
            <Select name="modele" id="modele">
              {modeles[brand]?.map((modele) => (
                <MenuItem value={modele} key={modele}>
                  {modele}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            required
            className={survey.cat4}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel htmlFor="screen">Taille de l'écran</InputLabel>
            <Select name="screen" id="screen">
              {screens.map((screen) => (
                <MenuItem key={screen} value={screen}>
                  {screen}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            required
            className={survey.cat5}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel htmlFor="memory">Mémoire</InputLabel>
            <Select name="memory" id="memory">
              {memorys.map((memory) => (
                <MenuItem key={memory} value={memory}>
                  {memory}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            required
            className={survey.cat6}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel htmlFor="ram">RAM</InputLabel>
            <Select name="ram" id="ram">
              {rams.map((ram) => (
                <MenuItem key={ram} value={ram}>
                  {ram}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            required
            className={survey.cat7}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel htmlFor="network">Réseau</InputLabel>
            <Select name="network" id="network">
              {networks.map((network) => (
                <MenuItem key={network} value={network}>
                  {network}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            required
            className={survey.cat8}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel htmlFor="couleur">Couleur</InputLabel>
            <Select name="Couleur" id="couleur">
              {couleurs.map((couleur) => (
                <MenuItem value={couleur} key={couleur}>
                  {couleur}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            required
            className={survey.cat9}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel htmlFor="state">Etat</InputLabel>
            <Select name="state" id="state">
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <div className={survey.cat10}>
            <p>Accessoires :</p>
            <label htmlFor="accessory">Aucun</label>
            <Checkbox defaultChecked />
            <label htmlFor="accessory">Chargeur</label>
            <Checkbox
              defaultChecked
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
            <label htmlFor="accessory">Cable</label>
            <Checkbox
              defaultChecked
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          </div>

          <div className={survey.buttons}>
            <Link to="/ajoute-un-appareil">
              <button className={survey.cat12} type="button">
                Retour
              </button>
            </Link>
            <Link to="/recapitulatif">
              <input
                className={survey.cat11}
                type="submit"
                onClick={addPhone}
              />
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}
