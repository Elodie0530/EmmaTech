import { PiLockKeyBold } from "react-icons/pi";
import logo from "../picture/EmmaTech.png";
import home from "../styles/Home.module.scss";

export default function Login() {
  return (
    <form className={home.form}>
      <div className={home.survey}>
        <div>
          <img className={home.logo} src={logo} alt="EmmaTech" />
          <h1>Connexion</h1>
        </div>
        <div className={home.formgroup}>
          <input
            className={home.formfield}
            type="text"
            id="username"
            name="username"
            placeholder=" "
          />
          <label htmlFor="username" className={home.formlabel}>
            Nom d'utilisateur
          </label>
        </div>
        <div className={home.formgroup}>
          <input
            className={home.formfield}
            type="password"
            id="password"
            name="password"
            placeholder=" "
          />
          <label htmlFor="password" className={home.formlabel}>
            Mot de Passe
          </label>
        </div>
      </div>
      <button className={home.button} type="submit">
        <PiLockKeyBold size={15} /> se connecter
      </button>
    </form>
  );
}
