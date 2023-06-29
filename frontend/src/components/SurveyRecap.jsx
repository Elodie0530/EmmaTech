import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import surveyRecap from "../styles/SurveyRecap.module.css";

export default function SurveyRecap() {
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
  ];

  return (
    <section className={surveyRecap.stockage}>
      <Link to="/ajoute-un-appareil">
        <button className={surveyRecap.button} type="button">
          Annuler
        </button>
      </Link>
      <div className={surveyRecap.divContaine}>
        <h1>Samsung GalaxyS22</h1>
        <div className={surveyRecap.liste}>
          {listes.map((liste) => {
            return (
              <div key={liste.name}>
                <h2>
                  {liste.name} : {liste.response}{" "}
                  <AiFillCheckCircle color="green" />
                </h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className={surveyRecap.estimation}>
        <div className={surveyRecap.prix}>
          <h2>Prix Estimé</h2>
          <p>165 euro</p>
        </div>
        <div className={surveyRecap.cat}>
          <h2>Catégorie</h2>
          <p>3-B</p>
        </div>
      </div>
      <Link to="/confirmation">
        <button className={surveyRecap.buttonAdd} type="button">
          Ajouté au stock <MdOutlineAddCircleOutline size={30} color="green" />
        </button>
      </Link>
    </section>
  );
}
