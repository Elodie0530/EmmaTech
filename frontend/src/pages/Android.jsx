import { useState } from "react";
import Navbar from "../components/Navbar";
import survey from "../styles/Survey.module.scss";

export default function Android() {
  const [brand, setBrand] = useState("");

  const models = {
    samsung: [
      "Galaxy 5",
      "Galaxy A14",
      "galaxy A54",
      "Galaxy M23",
      "Galaxy S21",
    ],
    google: ["Pixel 3", "Pixel 4", "Pixel 6", "Pixel 6a", "Pixel 7"],
    lg: ["G7", "G8", "G11", "V20", "V40"],
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
  const colors = ["Noir", "Blanc", "Gris", "Bleu", "Rose", "Vert"];
  const states = [
    "DEEE",
    "Réparable",
    "Bloqué",
    "Reconditionable",
    "Reconditionné",
  ];

  const [imei, setImei] = useState("");
  const filterInput = (event) => {
    setImei(event.target.value.replace(/\D/, ""));
  };

  return (
    <>
      <Navbar />
      <section className={survey.survey}>
        <h1>Android</h1>

        <div>
          <form action="#">
            <label htmlFor="marques">Marques</label>
            <select
              name="Marques"
              id="marques"
              onChange={(event) => {
                setBrand(event.target.value);
              }}
              value={brand}
            >
              <option value="samsung">Samsung</option>
              <option value="lg">Lg</option>
              <option value="huawei">Huawei</option>
              <option value="nokia">Nokia</option>
              <option value="sony">Sony</option>
              <option value="google">Google</option>
              <option value="xiaomi">Xiaomi</option>
              <option value="honor">Honor</option>
              <option value="one plus">One plus</option>
              <option value="motorola">Motorola</option>
              <option value="blackberry">BlackBerry</option>
            </select>

            <div>
              <label htmlFor="modèles">Modèles</label>
              <select name="model" id="modèles">
                {models[brand]?.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>

            <label htmlFor="imei">Numéro IMEI</label>
            <input
              maxLength={13}
              type="text"
              id="imei"
              onChange={filterInput}
              value={imei}
            />

            <div>
              <label htmlFor="screen">Taille de l'écran</label>
              <select name="screen" id="screen">
                {screens.map((screen) => (
                  <option key={screen} value={screen}>
                    {screen}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="memory">Mémoire</label>
              <select name="memory" id="memory">
                {memorys.map((memory) => (
                  <option key={memory} value={memory}>
                    {memory}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="ram">RAM</label>
              <select name="ram" id="ram">
                {rams.map((ram) => (
                  <option key={ram} value={ram}>
                    {ram}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="network">Réseau</label>
              <select name="network" id="network">
                {networks.map((network) => (
                  <option key={network} value={network}>
                    {network}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="color">Couleur</label>
              <select name="color" id="color">
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="state">Etat</label>
              <select name="state" id="state">
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p>Accessoires :</p>
              <label htmlFor="accessory">Aucun</label>
              <input
                type="checkbox"
                value="accessory"
                name="accessory"
                id="accessory"
              />
              <label htmlFor="accessory">Chargeur</label>
              <input
                type="checkbox"
                value="accessory"
                name="accessory"
                id="accessory"
              />
              <label htmlFor="accessory">Cable</label>
              <input
                type="checkbox"
                value="accessory"
                name="accessory"
                id="accessory"
              />
            </div>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    </>
  );
}
