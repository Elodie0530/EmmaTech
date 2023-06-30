import { AiFillEye, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import stockage from "../styles/Stockage.module.css";

export default function Stockage() {
  const style = {
    color: "black",
  };

  const array = [
    {
      marque: "Samsung",
      modele: "Galaxy S22",
      categorie: "2-C",
      chargeur: "Oui",
      date: "30/06/23",
      fiche: <AiOutlineEye size={20} />,
    },
    {
      marque: "Nokia",
      modele: "2660 Flip",
      categorie: "4-A",
      chargeur: "Non",
      date: "29/06/23",
      fiche: <AiOutlineEye size={20} />,
    },
    {
      marque: "Iphone",
      modele: "12",
      categorie: "3-B",
      chargeur: "Oui",
      date: "29/06/23",
      fiche: <AiOutlineEye size={20} />,
    },
    {
      marque: " ",
      modele: " ",
      categorie: " ",
      chargeur: " ",
      date: " ",
    },
    {
      marque: " ",
      modele: " ",
      categorie: " ",
      chargeur: " ",
      date: " ",
    },
    {
      marque: " ",
      modele: " ",
      categorie: " ",
      chargeur: " ",
      date: " ",
    },
    {
      marque: " ",
      modele: " ",
      categorie: " ",
      chargeur: " ",
      date: " ",
    },
  ];

  return (
    <>
      <Navbar />
      <section className={stockage.stockage}>
        <h1>Stockage</h1>
        <table>
          <caption>1/1</caption>
          <thead>
            <tr>
              <th>Marque</th>
              <th>Modèle</th>
              <th>Catégorie</th>
              <th>Chargeur</th>
              <th>Créer le</th>
              <th>
                <AiFillEye />
              </th>
            </tr>
          </thead>
          <tbody>
            {array.map((tab) => {
              return (
                <tr>
                  <td>{tab.marque}</td>
                  <td>{tab.modele}</td>
                  <td>{tab.categorie}</td>
                  <td>{tab.chargeur}</td>
                  <td>{tab.date}</td>
                  <td>
                    <Link style={style} to="/stockage/recapitulatif">
                      {tab.fiche}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}
