import { BiHomeSmile } from "react-icons/bi";
import header from "../styles/Header.module.css";
import logo from "../picture/EmmaTech.png";

export default function Navbar() {
  const navLink = ["Ajouté un appareil", "Stockage", "FAQ"];

  const renderNavLink = (content) => {
    return (
      <ul key={content}>
        <li>
          <button type="button">{content}</button>
        </li>
      </ul>
    );
  };

  return (
    <header className={header.header}>
      <div className={header.container}>
        <div className={header.navContainer}>
          <img className={header.logo} src={logo} alt="EmmaTech" />
          <nav>{navLink.map((nav) => renderNavLink(nav))}</nav>
          <BiHomeSmile size={45} className={header.home} />
        </div>
      </div>
    </header>
  );
}
