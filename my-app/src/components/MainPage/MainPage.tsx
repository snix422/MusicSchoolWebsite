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
import img from '../../assets/images/logoNavBar/Original Logo.png'

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <div className="w-screen h-4/5 bg-yellow-900 flex flex-col justify-center gap-48 pb-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col items-center gap-12 mt-20"
        >
          <img src={img} alt="obrazek" className="max-md:w-3/4 w-2/4 h-64 bg-gray-50 rounded"></img>
          <p className="text-white w-3/5" style={{ fontFamily: "Montserrat" }}>
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
                Accordion 1
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Montserrat" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
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
                Accordion 1
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Montserrat" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
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
                Moje dziecko jest niestałe i obawiam się, że moje dziecko
                zrezygnuje po kilku lekcjach...
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontFamily: "Montserrat" }}>
                Tutaj (znowu) bardzo dużo zależy od rodzica. Nabywanie
                umiejętności muzycznych nigdy nie jest procesem liniowym - po
                pewnym czasie pojawiają się trudności i ,,dołki". Pokonywanie
                tych przeszkód uczy wytrwałości, a zdobyte kompetencje
                procentują w dalszym rozwoju - są przekładane na inne dziedziny
                życia.
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
