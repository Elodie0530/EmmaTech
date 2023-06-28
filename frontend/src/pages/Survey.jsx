import { BsAndroid2, BsApple } from "react-icons/bs";

import Navbar from "../components/Navbar";
import survey from "../styles/Survey.module.scss";

export default function Survey() {
  return (
    <>
      <Navbar />
      <section className={survey.survey}>
        <h1>Système d'exploitation</h1>
        <div className={survey.divButton}>
          <button className={survey.button1} type="button">
            <BsAndroid2 />
            Android
          </button>
          <button className={survey.button2} type="button">
            <BsApple />
            IOS
          </button>
        </div>
      </section>
    </>
  );
}
