import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import img from "../../assets/images/logoNavBar/Original Logo.png";
import logo from "../../assets/images/logoNavBar/Wordpress Transparent.png";
import ScrollToTop from "react-scroll-to-top";

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
            <span className="text-yellow-600">
              <b>
                Zobacz, jak możesz wspomóc rozwój Twojego dziecka z naszą
                pomocą!
              </b>
            </span>
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col items-center"
        >
          <h2
            className="mb-14 text-white text-4xl"
            style={{ fontFamily: "Montserrat" }}
          >
            FAQ - Typowe pytania:
          </h2>
          <Accordion className="w-3/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                <b>
                  Nie wiem, czy moje dziecko ,,ma słuch" oraz czy nadaje się do
                  muzycznej edukacji?
                </b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-justify"
                style={{ fontFamily: "Montserrat" }}
              >
                Nasze doświadczenie pokazuje, że{" "}
                <b>nie ma dzieci niezdolnych - są tylko źle prowadzone</b>. Przy
                merytoryczym prowadzeniu przez profesjonalnego nauczyciela,
                <b>
                  każde dziecko jest w stanie rozwinąć się w grze na
                  instrumencie
                </b>
                . Oczywiście, tempo rozwoju dzieci jest różne, jednakże{" "}
                <b>
                  głównym czynnikiem wpływającym na postęp nauki jest
                  zaangażowanie dziecka, systematyczność, a nie szeroko
                  rozumiany ,,talent".
                </b>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                <b>Po co mojemu dziecku umiejętność gry na instrumencie?</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-justify"
                style={{ fontFamily: "Montserrat" }}
              >
                Zysk z tej kompetencji można wykazać na kilku płaszczyznach. Po
                pierwsze,{" "}
                <b>gra na instrumencie jest bardzo dobrym stymulatorem mózgu</b>{" "}
                - integruje pracę obu półkuli, wspiera tworzenie nowych połączeń
                neuronalnych. Dziecko uczy się <b>planowania pracy </b>
                (przygotowania utworu) oraz ,,dowożenia wyników". Konfrontuje
                się ze swoimi słabościami i uczy się je zwyciężać.{" "}
                <b>
                  Nabywa pewności siebie, zwiększa sammoocenę, uczy się
                  występować publicznie oraz panować nad stresem
                </b>
                . Wreszcie, wzbogaca się wewnętrznie, kulturowo, uwrażliwia na
                piękno, poznaje utwory kultury muzycznej różnych krajów i epok.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                <b>W jakich miastach działamy?</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-justify"
                style={{ fontFamily: "Montserrat" }}
              >
                Swoją przygodę rozpoczęliśmy w <b>Łodzi</b> i tutaj działamy
                najaktywniej. Oczywiście{" "}
                <b>dojeżdżamy również na odległe peryferia</b>. Jesteśmy w
                trakcie rozwijania projektu także w <b>Warszawie</b>,{" "}
                <b>Wrocławiu</b> i <b>Gdańsku</b>, wciąż też planujemy poszerzać
                nasz obszar działania. Prosimy o wiadomość, jeśli są Państwo z
                innego regionu i byliby Państwo zainteresowani współpracą.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                <b>Rola pierwszego nauczyciela</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-justify"
                style={{ fontFamily: "Montserrat" }}
              >
                <b>
                  Dziecko niejako ,,patrzy" na instrument przez pryzmat
                  pierwszego nauczyciela
                </b>
                , jego osobowości, charakteru, jak również muzycznych
                kompetencji. Wydobycie dźwięków kilku piosenek z pianina nie
                jest niczym wyjątkowym, natomiast świadome prowadzenie
                początkującego ucznia{" "}
                <b>
                  wymaga doświadczenia, procesu dydaktycznego oraz miękkich
                  kompetencji: poczucia humoru, zbudowania relacji z dzieckiem,
                  zrozumienia ,,jego świata"
                </b>{" "}
                itd. Nierzadko dostajemy uczniów ,,po" przypadkowych lekcjach,
                ze złymi nawykami oraz niepoukładaną wiedzą. Naprawa tego
                procesu jest możliwa, lecz{" "}
                <b>
                  znacznie łatwiej jest prowadzić go od początku w profesjonalny
                  sposób
                </b>
                .
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                <b>
                  Moje dziecko marzy o grze na wiolonczeli, gitarze, innym
                  instrumencie, którego nie ma w ofercie
                </b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-justify"
                style={{ fontFamily: "Montserrat" }}
              >
                Bardzo prosimy o maila ze{" "}
                <b>wskazaniem konkretnego instrumentu</b>. Współpracując z
                bardzo wieloma instrumentalistami, z pewnością pomożemy w
                doborze kompetentnego nauczyciela z potwierdzonymi sukcesami,
                gdyż głęboko wierzymy, iż{" "}
                <b>
                  nie warto powierzać rozwoju Państwa dziecka przypadkowym
                  osobom
                </b>
                . Nasz projekt ciągle się rozwija -{" "}
                <b>
                  kolejne specjalności będą uruchamiane w najbliższym czasie
                </b>
                .
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                <b>
                  Moje dziecko jest niestałe i obawiam się, że moje dziecko
                  zrezygnuje po kilku lekcjach...
                </b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-justify"
                style={{ fontFamily: "Montserrat" }}
              >
                Tutaj (znowu) <b>bardzo dużo zależy od rodzica</b>. Nabywanie
                umiejętności muzycznych nigdy nie jest procesem liniowym - po
                pewnym czasie pojawiają się trudności i ,,dołki". Pokonywanie
                tych przeszkód{" "}
                <b>
                  uczy wytrwałości, a zdobyte kompetencje procentują w dalszym
                  rozwoju - są przekładane na inne dziedziny życia
                </b>
                . Takie zwycięstwa nad sobą dają naszym uczniom wiele
                satysfakcji.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                <b>Jaki jest koszt zajęć?</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-justify"
                style={{ fontFamily: "Montserrat" }}
              >
                Oferty cenowe przygotowujemy dla Państwa indywidualnie,
                dopasowując liczbę godzin w tygodniu do Państwa możliwości
                czasowych, potrzeb oraz percepcji i wieku dziecka. Na cenę ma
                wpływ także odległość - czas dojazdu nauczycieli. Podczas
                rozmowy jesteśmy w stanie{" "}
                <b>
                  doradzić najbardziej optymalną dla Państwa liczbę lekcji,
                  zasugerować wybór innego instruemntu bądź dopasować zajęcia
                  teoretycze
                </b>
                . Zachęcamy do skorzystania z pierwszej lekcji próbnej w cenie
                300zł, oraz do przeczytania o naszej{" "}
                <a href="https://panodmuzyki.com.pl/dlakogo">
                  <b>propozycji wartości</b> w zakładce{" "}
                  <b>
                    <u>Dla Kogo</u>
                  </b>
                </a>
                .
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                <b>Możliwość lekcji w języku obcym</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-justify"
                style={{ fontFamily: "Montserrat" }}
              >
                Wszyscy nasi nauczyciele, jako aktywni zawodowo artyści,
                prowadzą zajecia również{" "}
                <b>w języku angielskim (nieodpłatnie)</b>. Część Kadry posługuje
                się także językiem niemieckim i francuskim.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
