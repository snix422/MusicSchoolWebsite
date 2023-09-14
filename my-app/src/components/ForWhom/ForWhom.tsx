import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const ForWhom = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="w-screen min-h-screen bg-black flex flex-col items-center gap-28 pt-10 pb-10 max-sm:justify-center max-sm:gap-10 xl:pt-48 lg:'pt-48 md:pt-48 sm:pt-48">
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-3xl"
          style={{ fontFamily: "Montserrat" }}
        >
          Dla kogo?
        </motion.h2>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-lg w-3/5"
          style={{ fontFamily: "Montserrat" }}
        >
          Jeżeli <b>czas z bliskimi jest dla Państwa największą wartością</b>,
          jesteśmy idealnym wyborem. Przywieziemy do Państwa domu
          spersonalizowaną ofertę Szkoły Muzycznej, zarówno realizując podstawę
          programową, jak też zgłębiając zainteresowania ucznia. <br />
          Dzielimy się naszą pasją do muzyki z dziećmi, dorosłymi oraz
          seniorami. Wspólnie poznajemy najpiękniejsze utwory klasyki, muzyki
          popularnej i filmowej. <br />
          <br />
          Nasi klienci chwalą szczególnie świetny kontakt z dziećmi oraz
          elastyczność i dyspozycyjność.
          <br />
          <br />
          Udało się nam przenieść na grunt pedagogiki muzycznej metodykę
          zwinnego zarządzania projektami (Agile). Pracując w{" "}
          <b>cyklach PDCA</b>, wcześnie reagujemy na potencjalne problemy. Uczeń
          jest w zdalnym kontakcie z nauczycielem przez cały czas i w razie
          wątpliwości podczas samodzielnego ćwiczenia zawsze może zwrócić się o
          pomoc. Skutkuje to brakiem frustracji oraz wyraźnie szybszym rozwojem.
          <br />
          <br />
          Jesteśmy przekonani, że dobrzy nauczyciele nie tylko ,,mają
          podejście", lecz tworzą <b>wydajne procesy nauczania</b>. Lekcje z
          nami mają przejrzysta strukturę, a czas ucznia wkorzystany jest
          możliwie jak najwydajniej. Po każdej lekcji rodzic otrzymuje notatkę
          oraz najbliższe cele, co integruje go z procesem nauki swojego
          dziecka.
        </motion.p>
      </div>
      <Footer />
    </div>
  );
};

export default ForWhom;
