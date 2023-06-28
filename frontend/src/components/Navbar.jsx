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
                <Link to="/Ajoute-un-appareil">
                  <button type="button">Ajouter un appareil</button>
                </Link>
              </li>
              <li>
                <button type="button">Stockage</button>
              </li>
              <li>
                <button type="button">FAQ</button>
              </li>
            </ul>
          </nav>
          <Link to="/Accueil">
            <BiHomeSmile size={45} className={header.home} />
          </Link>
        </div>
      </div>
    </header>
  );
}
