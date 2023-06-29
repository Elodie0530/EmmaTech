import { AiFillCheckCircle } from "react-icons/ai";
import stockageRecap from "../styles/StockageRecap.module.css";
import mobile from "../picture/mobile.png";

export default function StockageRecap() {
  const listes = [
    {
      name: "Mémoire",
      response: "Samsung",
    },
    {
      name: "Ram",
      response: "16Go",
    },
    {
      name: "Ecran",
      response: "4 ''",
    },
    {
      name: "Reseau",
      response: "4G",
    },
    {
      name: "Etat du téléphone",
      response: "DEEE",
    },
    {
      name: "Chargeur",
      response: "Oui",
    },
    {
      name: "Catégorie",
      response: "3-B",
    },
    {
      name: "Prix Estimé",
      response: "165",
    },
  ];

  return (
    <section className={stockageRecap.stockage}>
      <button type="button">Retour</button>
      <div className={stockageRecap.divContaine}>
        <img className={stockageRecap.mobile} src={mobile} alt={mobile} />
        <h1>Samsung GalaxyS22</h1>
        <div className={stockageRecap.liste}>
          {listes.map((liste) => {
            return (
              <div>
                <h2>
                  {liste.name} : {liste.response}
                  <AiFillCheckCircle color="green" />
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
