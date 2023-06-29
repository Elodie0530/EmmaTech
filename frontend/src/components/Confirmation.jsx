import { GiConfirmed } from "react-icons/gi";
import { Link } from "react-router-dom";
import confirmation from "../styles/Confirmation.module.css";
import confirm from "../picture/confirm.png";

export default function Confirmation() {
  return (
    <section className={confirmation.confirmation}>
      <img src={confirm} alt="Confirmation" />
      <h1>
        Le téléphone à été ajouter au stock{" "}
        <GiConfirmed color="green" size={50} />
      </h1>
      <div className={confirmation.buttons}>
        <Link to="/ajoute-un-appareil">
          <button type="button">Ajouter un nouvel appareil</button>
        </Link>
        <Link to="/accueil">
          <button type="button">Retour à l'accueil</button>
        </Link>
      </div>
    </section>
  );
}
