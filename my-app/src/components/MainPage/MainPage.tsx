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
            className="max-md:w-4/5 max-md:h-56 w-2/6 h-80 bg-gray-50 rounded max-sm:hidden"
          ></img>
          <img
            src={logo}
            alt="obrazek"
            className="hidden w-3/5 max-sm:hidden"
          />
          <p
            className="text-white w-3/5 text-justify text-4xl max-md:text-xl "
            style={{ fontFamily: "Montserrat" }}
          >
            Jesteśmy mobilną szkołą muzyczną w Twoim domu. Jeżeli czas jest dla
            Ciebie największą wartością, sprawdź naszą ofertę edukacyjną.
            Zobacz, jak możesz wspomóc rozwój Twojego dziecka z naszą pomocą.
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
              <Typography style={{ fontFamily: "Montserrat" }}>
                Nie wiem, czy moje dziecko ,,ma słuch" oraz czy nadaje się do
                muzycznej edukacji?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Montserrat" }}>
                Nasze doświadczenie pokazuje, że nie ma dzieci niezdolnych - są
                tylko źle prowadzone. Przy merytoryczym prowadzeniu przez
                profesjonalnego nauczyciela, każde dziecko jest w stanie
                rozwinąć się w grze na instrumencie. Oczywiście, tempo rozwoju
                dzieci jest różne, jednakże głównym czynnikiem wpłyawjącym na
                postęp nauki jest zaangażowanie dziecka, systematyczność, a nie
                szeroko rozumiany ,,talent".
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontFamily: "Montserrat" }}>
                Po co mojemu dziecku umiejętność gry na instrumencie?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Montserrat" }}>
                Zysk z tej kompetencji można wykazać na kilku płaszczyznach. Po
                pierwsze, gra na instrumencie jest bardzo dobrym stymulatorem
                mózgu - integruje pracę obu półkuli, wspiera tworzenie nowych
                połączeń neuronalnych. Dziecko uczy się planowania pracy
                (przygotowania utworu) oraz ,,dowożenia wyników". Konfrontuje
                się ze swoimi słabościami i uczy się je zwyciężać. Nabywa
                pewność siebie, zwiększa sammoocenę, uczy się występować
                publicznie oraz panować nad stresem. Wreszcie, wzbogaca się
                wewnętrznie, kulturowo, uwrażliwia na piękno, poznaje utwory
                kultury muzycznej różnych krajów i epok.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontFamily: "Montserrat" }}>
                W jakich miastach działamy?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Montserrat" }}>
                Swoją przygodę rozpoczęliśmy w <b>Łodzi</b> i tutaj działamy
                najaktywniej. Oczywiście dojeżdżamy również na odległe
                peryferia. Jesteśmy w trakcie rozwijania projektu także w{" "}
                <b>Warszawie</b>, <b>Wrocławiu</b> i <b>Gdańsku</b>, wciąż też
                planujemy poszerzać nasz obszar działania. Prosimy o wiadomość,
                jeśli są Państwo z innego regionu i byliby Państwo
                zainteresowani współpracą.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontFamily: "Montserrat" }}>
                Rola pierwszego nauczyciela
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Montserrat" }}>
                Dziecko ,,patrzy" na instrument niejako przez pryzmat
                nauczyciela, jego osobowości, charakteru, jak również muzycznych
                kompetencji. Wydobycie dźwięków kilku piosenek z pianina nie
                jest niczym wyjątkowym, natomiast świadome prowadzenie
                początkującego ucznia wymaga doświadczenia, procesu
                dydaktycznego oraz miękkich kompetencji: poczucia humoru,
                zbudowania relacji z dzieckiem, zrozumienia ,,jego świata" itd.
                Nierzadko dostajemy uczniów ,,po" przypadkowych lekcjach, ze
                złymi nawykami oraz źle ułożoną wiedzą. Naprawa tego procesu
                jest możliwa, lecz dużo łatwiej jest prowadzić go od początku w
                profesjonalny sposób.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontFamily: "Montserrat" }}>
                Moje dziecko marzy o grze na wiolonczeli, gitarze, innym
                instrumencie, którego nie ma w ofercie
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Montserrat" }}>
                Bardzo prosimy o maila z wskazaniem konkretnego instrumentu.
                Współpracując z bardzo wieloma instrumentalistami, z pewnością
                pomożemy w doborze kompetentnego nauczyciela z potwierdzonymi
                sukcesami, gdyż głęboko wierzymy, iż nie warto powierzać rozwoju
                Państwa dziecka przypadkowym osobom. Nasz projekt ciągle się
                rozwija - kolejne specjalności będą uruchamiane w najbliższym
                czasie.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontFamily: "Montserrat" }}>
                Moje dziecko jest niestałe i obawiam się utraty motywacji po
                kilku lekcjach...
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Montserrat" }}>
                Tutaj (znowu) bardzo dużo zależy od rodzica. Nabywanie
                umiejętności muzycznych nigdy nie jest procesem liniowym - po
                pewnym czasie pojawiają się trudności i ,,dołki". Pokonywanie
                tych przeszkód uczy wytrwałości, a zdobyte kompetencje
                procentują w dalszym rozwoju - są przekładane na inne dziedziny
                życia. Z naszego doświadczenia wynika, że wsparcie rodzica przy
                ćwiczeniu oraz dobra atmosfera i kontakt z pedagogiem znacząco
                redukują takie prawdopodobieństwo.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontFamily: "Montserrat" }}>
                Jaki jest koszt zajęć?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Montserrat" }}>
                Oferty cenowe przygotowujemy dla Państwa indywidualnie,
                dopasowując liczbę godzin w tygodniu do Państwa możliwości
                czasowych, potrzeb oraz percepcji i wieku dziecka. Na cenę ma
                wpływ także odległość - czas dojazdu nauczycieli. Podczas
                rozmowy jesteśmy w stanie doradzić najbardziej optymalną dla
                Państwa liczbę lekcji, zasugerować wybór innego instruemntu bądź
                dopasować zajęcia teoretycze. Zachęcamy do skorzystania z
                pierwszej lekcji próbnej w cenie 300zł, oraz do przeczytania o
                naszej <b>propozycji wartości</b> w zakładce Dla Kogo.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontFamily: "Montserrat" }}>
                Możliwość lekcji w innym języku
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Montserrat" }}>
                Wszyscy nasi nauczyciele, jako aktywni zawodowo artyści,
                prowadzą zajecia również w języku angielskim (nieodpłatnie).
                Część Kadry posługuje się także językiem niemieckim i
                francuskim.
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
