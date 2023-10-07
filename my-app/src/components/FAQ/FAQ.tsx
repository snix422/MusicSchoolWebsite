import { motion } from "framer-motion";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

import ScrollToTop from "react-scroll-to-top";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="w-screen min-h-screen bg-black flex flex-col items-center gap-28 pb-10 pt-10 max-sm:justify-center max-sm:gap-2 xl:pt-48 lg:pt-48 md:pt-28 sm:pt-5 max-sm:pb-5">
        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-3xl max-sm:pb-10 max-sm:pt-10 max-md:w-4/5"
          style={{ fontFamily: "Montserrat", marginTop: "-80px" }}
        >
          Najczęściej zadawane pytania:
        </motion.h2>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-lg w-4/5 text-justify max-sm:text-center"
          style={{ fontFamily: "Montserrat" }}
        >
          Poniżej znajdują się pytania, na które odpowiadamy najczęściej. Mamy
          jednak świadomość, że{" "}
          <span className="text-yellow-600">
            <b>każde dziecko jest wyjątkowe</b>
          </span>{" "}
          i z chęcią umówimy się na{" "}
          <span className="text-yellow-600">
            <b>darmową konsultację</b>
          </span>
          . Zachęcamy jedak gorąco do{" "}
          <span className="text-yellow-600">
            <b>przeczytania w pierwszej kolejności</b>
          </span>{" "}
          poniższych zapytań:
          <br />
          <br />
          <br />
        </motion.p>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-screen flex flex-col items-center"
          style={{ minHeight: "50vh" }}
        >
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
                200zł, oraz do przeczytania o naszej{" "}
                <a href="/dlakogo">
                  <b>propozycji wartości</b> w zakładce{" "}
                  <b>
                    <u>Dla Kogo</u>
                  </b>
                </a>
                .
                <br />
                <br />
                Oferjemy <b>atrakcyjne rabaty dla rodzeństwa!</b> Drugie dziecko
                uczymy z 30% rabatem, trzecie z 60%.
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

export default FAQ;
