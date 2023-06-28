import Navbar from "../components/Navbar";
import stockage from "../styles/Stockage.module.css";

export default function Stockage() {
  return (
    <>
      <Navbar />
      <section className={stockage.stockage}>
        <h1>Stockage</h1>
      </section>
    </>
  );
}
