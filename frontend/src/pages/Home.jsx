import { BsFillPersonFill } from "react-icons/bs";
import { TbUserQuestion } from "react-icons/tb";
import { AiOutlineInbox } from "react-icons/ai";
import { RiSurveyLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import home from "../styles/Home.module.css";
import logo from "../picture/EmmaTech.png";

export default function Home() {
  const style = {
    color: "black",
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  };

  return (
    <section className={home.background}>
      <div className={home.hello}>
        <BsFillPersonFill size={60} />
        <h1>Bienvenue Célia</h1>
        <img src={logo} alt="" />
      </div>
      <div className={home.container}>
        <div className={home.div1}>
          <Link style={style} to="/ajoute-un-appareil">
            Ajouter un appareil
            <RiSurveyLine size={30} />
          </Link>
        </div>

        <div className={home.div2}>
          <Link style={style} to="/stockage">
            Stockage <AiOutlineInbox size={30} />
          </Link>
        </div>

        <div className={home.div3}>
          <Link style={style} to="/foire-aux-questions">
            FAQ <TbUserQuestion size={30} />
          </Link>
        </div>
      </div>

      <div className={home.button}>
        <button type="button">
          <Link style={style} to="/">
            Déconnexion
          </Link>
        </button>
      </div>
    </section>
  );
}
