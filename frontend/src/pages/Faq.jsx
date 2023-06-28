import Navbar from "../components/Navbar";
import faq from "../styles/Faq.module.css";

export default function Faq() {
  return (
    <>
      <Navbar />
      <section className={faq.faq}>
        <h1>FAQ</h1>
      </section>
    </>
  );
}
