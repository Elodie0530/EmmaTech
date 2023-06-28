import { BiHomeSmile } from "react-icons/bi";
import { Link } from "react-router-dom";
import header from "../styles/Header.module.css";
import logo from "../picture/EmmaTech.png";

export default function Navbar() {
  return (
    <header className={header.header}>
      <div className={header.container}>
        <div className={header.navContainer}>
          <img className={header.logo} src={logo} alt="EmmaTech" />
          <nav>
            <ul>
              <li>
                <Link to="/ajoute-un-appareil">
                  <button type="button">Ajouter un appareil</button>
                </Link>
              </li>
              <li>
                <Link to="/stockage">
                  <button type="button">Stockage</button>
                </Link>
              </li>
              <li>
                <Link to="/foire-aux-questions">
                  <button type="button">FAQ</button>
                </Link>
              </li>
            </ul>
          </nav>
          <Link to="/accueil">
            <BiHomeSmile size={45} className={header.home} />
          </Link>
        </div>
      </div>
    </header>
  );
}
