import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const ForWhom = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="w-screen h-screen bg-yellow-900 flex flex-col items-center gap-28 max-sm:justify-center max-sm:gap-10 xl:pt-48 lg:'pt-48 md:pt-48 sm:pt-48">
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
          Jeżeli czas z bliskimi jest dla Państwa największą wartością, jesteśmy
          idealnym wyborem. Przywieziemy do Państwa domu spersonalizowaną ofertę
          Szkoły Muzycznej, zarówno realizując podstawę programową, jak też
          zgłębiając zainteresowania ucznia. <br />
          Dzielimy się naszą pasją do muzyki z dziećmi, dorosłymi oraz
          seniorami. Wspólnie poznajemy najpiękniejsze utwory klasyki, muzyki
          popularnej i filmowej. <br />
          <br />
          Nasi klienci chwalą szczególnie świetny kontakt z dziećmi oraz
          elastyczność i dyspozycyjność.
        </motion.p>
      </div>
      <Footer />
    </div>
  );
};

export default ForWhom;
