import { BsArrowRightShort, BsPatchQuestion } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiFillCaretRight } from "react-icons/ai";
import Navbar from "../components/Navbar";
import faq from "../styles/Faq.module.css";

export default function Faq() {
  return (
    <>
      <Navbar />
      <section className={faq.faq}>
        <h1>FAQ</h1>
        <div className={faq.questions}>
          <div className={faq.question}>
            <details>
              <summary>
                <AiFillCaretRight />
                Comment ajouter un nouveau smartphone{" "}
                <BsPatchQuestion size={25} className={faq.emoticon} />
              </summary>
              <ol>
                <li>Allez sur l'onglet ajouter un nouvel appareil</li>
              </ol>
            </details>
          </div>
          <div className={faq.question}>
            <details>
              <summary>
                <AiFillCaretRight />
                Comment trouver les caractéristiques sur l'appareil à
                enregistrer
                <BsPatchQuestion size={25} className={faq.emoticon} />
              </summary>
              <ol>
                <li>* La Marque : Visible sur l'arrière du smartphone</li>
                <li>
                  * L'écran : Avec une règle mesurer la diagonale de l'écran
                  puis divisez celle-ci par 2,54 afin d'obtenir une taille en
                  pouce
                </li>
                <li>
                  * Le numéro IMEI (numéro de série) en composant *#06# sur le
                  téléphone sinon
                </li>
                <li>
                  - Sur IOS : Réglage <BsArrowRightShort /> Général
                  <BsArrowRightShort />
                  Information
                </li>
                <li>
                  - Sur Android : Paramètres
                  <BsArrowRightShort /> A propos du téléphone / appareil
                  <BsArrowRightShort /> État
                </li>
                <li>
                  * L'OS, la Version, la RAM, la Mémoire : Vous les trouverez
                  dans les paramètres système du téléphone <FiSettings />
                </li>
              </ol>
            </details>
          </div>
          <div className={faq.question}>
            <details>
              <summary>
                <AiFillCaretRight />
                Comment savoir le système d'exploitation
                <BsPatchQuestion size={25} className={faq.emoticon} />
              </summary>
              <ol>
                <li>* En fonction de la marque du téléphone</li>
                <li>- Apple est sous IOS</li>
                <li>- Google est sous Android</li>
              </ol>
            </details>
          </div>
          <div className={faq.question}>
            <details>
              <summary>
                <AiFillCaretRight />
                Comment avoir accès aux smartphones enregistrés
                <BsPatchQuestion size={25} className={faq.emoticon} />
              </summary>
              <ol>
                <li>
                  Allez dans l'onglet "Stockage" ici seront stocker tout les
                  téléphones enregistrés dans la base de données
                </li>
              </ol>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
