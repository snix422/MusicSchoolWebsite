import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import img from "../../assets/images/logoNavBar/Original Logo.png";
import logo from "../../assets/images/logoNavBar/Wordpress Transparent.png";
import ScrollToTop from "react-scroll-to-top";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <div className="w-screen h-4/5 bg-black flex flex-col justify-center gap-28 pb-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col items-center gap-12 mt-20"
        >
          <img
            src={img}
            alt="obrazek"
            className="max-md:w-4/5 max-md:h-56 w-2/6 h-80 max-lg:hidden"
          />
          <img
            src={logo}
            alt="obrazek"
            className="hidden w-3/5 max-sm:hidden"
          />
          <p
            className="text-white w-4/5 text-justify text-4xl max-md:text-xl max-sm:text-justify"
            style={{ fontFamily: "Montserrat", hyphens: "auto" }}
          >
            Jesteśmy mobilną szkołą muzyczną w Twoim domu. Jeżeli czas z
            bliskimi jest dla Ciebie największą wartością, sprawdź naszą ofertę
            edukacyjną.{" "}
            <a href="/oferta">
              <span className="text-yellow-600">
                <b>
                  Zobacz, jak możesz wspomóc rozwój Twojego dziecka z naszą
                  pomocą!
                </b>
              </span>
            </a>
          </p>

          <p
            className="text-white w-4/5 text-justify text-4xl max-md:text-xl max-sm:text-justify"
            style={{ fontFamily: "Montserrat", hyphens: "auto" }}
          >
            <br />
            Zapraszamy na{" "}
            <a href="tel:698873023">
              <span className="text-yellow-600">
                <b>darmową konsultację</b>
              </span>
            </a>
            , podczas której dowiesz się, co możemy Ci zaproponować! Polecamy
            także przeczytać o naszej{" "}
            <a href="/dlakogo">
              <span className="text-yellow-600">
                <b>propozycji wartości</b>
              </span>
            </a>
            .
          </p>
        </motion.div>
      </div>
      <ScrollToTop
        smooth
        top={100}
        component={<KeyboardArrowUpIcon />}
        color="blue"
        height="20"
        style={{ marginBottom: "40px" }}
      ></ScrollToTop>
      <Footer />
    </div>
  );
};

export default MainPage;
