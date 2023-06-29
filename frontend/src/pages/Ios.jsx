import Navbar from "../components/Navbar";
import survey from "../styles/Survey.module.scss";

export default function Ios() {
  return (
    <>
      <Navbar />
      <section className={survey.survey}>
        <h1>ios</h1>
      </section>
    </>
  );
}
