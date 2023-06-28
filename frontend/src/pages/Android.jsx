import Navbar from "../components/Navbar";
import survey from "../styles/Survey.module.scss";

export default function Android() {
  return (
    <>
      <Navbar />
      <section className={survey.survey}>
        <h1>Android</h1>
      </section>
    </>
  );
}
