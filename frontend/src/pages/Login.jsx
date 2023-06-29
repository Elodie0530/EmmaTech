import { PiLockKeyBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import logo from "../picture/EmmaTech.png";
import login from "../styles/Login.module.scss";

export default function Login() {
  return (
    <section>
      <form className={login.form}>
        <div className={login.survey}>
          <div>
            <img className={login.logo} src={logo} alt="EmmaTech" />
            <h1>Connexion</h1>
          </div>
          <div className={login.formgroup}>
            <input
              className={login.formfield}
              type="text"
              id="username"
              name="username"
              placeholder=" "
            />
            <label htmlFor="username" className={login.formlabel}>
              Nom d'utilisateur
            </label>
          </div>
          <div className={login.formgroup}>
            <input
              className={login.formfield}
              type="password"
              id="password"
              name="password"
              placeholder=" "
            />
            <label htmlFor="password" className={login.formlabel}>
              Mot de Passe
            </label>
          </div>
        </div>
        <Link to="/accueil">
          <button className={login.button} type="submit">
            <PiLockKeyBold size={15} /> se connecter
          </button>
        </Link>
      </form>
    </section>
  );
}
