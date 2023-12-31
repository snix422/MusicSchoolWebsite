import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const ForWhom = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="w-screen min-h-screen bg-black flex flex-col items-center gap-28 pt-10 pb-10 max-sm:justify-center max-sm:gap-10 xl:pt-28 lg:'pt-28 md:pt-28 sm:pt-28">
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
          className="text-white text-lg w-4/5 text-justify max-sm:text-center"
          style={{ fontFamily: "Montserrat" }}
        >
          Jeżeli{" "}
          <span className="text-yellow-600">
            <b>czas z bliskimi jest dla Państwa największą wartością</b>
          </span>
          , jesteśmy idealnym wyborem. Przywieziemy do Państwa domu
          spersonalizowaną ofertę Szkoły Muzycznej, zarówno realizując podstawę
          programową, jak też zgłębiając indywidualne zainteresowania każdego
          ucznia. <br />
          <br />
          Dzielimy się naszą pasją do muzyki z dziećmi, dorosłymi oraz
          seniorami. Wspólnie poznajemy najpiękniejsze utwory klasyki, muzyki
          popularnej i filmowej. <br />
          <br />
          Nasi klienci chwalą szczególnie{" "}
          <span className="text-yellow-600">
            <strong>świetny kontakt z dziećmi</strong>
          </span>{" "}
          oraz elastyczność i dyspozycyjność. Uczniowie mogą w każdym momencie
          nawiązać kontakt z nauczycielem, napotykając trudności podczas
          ćwiczeń.
          <br />
          <br />
          Udało się nam przenieść na grunt pedagogiki muzycznej{" "}
          <span className="text-yellow-600">
            <strong>metodykę zwinnego zarządzania projektami (Agile)</strong>
          </span>{" "}
          . Pracując w{" "}
          <span className="text-yellow-600">
            <b>cyklach PDCA</b>
          </span>
          , wcześnie reagujemy na potencjalne problemy. Uczeń jest w zdalnym
          kontakcie z nauczycielem przez cały czas i w razie wątpliwości podczas
          samodzielnego ćwiczenia zawsze może zwrócić się o pomoc. Skutkuje to
          brakiem frustracji oraz wyraźnie szybszym rozwojem.
          <br />
          <br />
          Jesteśmy przekonani, że dobrzy nauczyciele nie tylko ,,mają
          podejście", lecz tworzą{" "}
          <span className="text-yellow-600">
            <b>wydajne procesy nauczania</b>
          </span>
          . Lekcje z nami mają przejrzysta strukturę, a czas ucznia wkorzystany
          jest możliwie jak najwydajniej. Po każdej lekcji rodzic otrzymuje
          notatkę oraz najbliższe cele, co integruje go z procesem nauki swojego
          dziecka.
        </motion.p>
      </div>
      <Footer />
    </div>
  );
};

export default ForWhom;
