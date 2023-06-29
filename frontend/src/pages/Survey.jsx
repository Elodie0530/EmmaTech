import { BsAndroid2, BsApple } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import survey from "../styles/Survey.module.scss";

export default function Survey() {
  const style = {
    color: "black",
  };

  return (
    <>
      <Navbar />
      <section className={survey.survey}>
        <h1>Système d'exploitation</h1>
        <div className={survey.divButton}>
          <button className={survey.button1} type="button">
            <Link style={style} to="/android">
              <BsAndroid2 color="black" />
              Android
            </Link>
          </button>

          <button className={survey.button2} type="button">
            <Link style={style} to="/ios">
              <BsApple color="black" />
              IOS
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
