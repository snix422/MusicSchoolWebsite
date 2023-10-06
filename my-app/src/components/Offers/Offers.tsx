import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollToTop from "react-scroll-to-top";

const Offers = () => {
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
          Nasza oferta edukacyjna:
        </motion.h2>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-lg w-4/5 text-justify max-sm:text-center"
          style={{ fontFamily: "Montserrat" }}
        >
          Poniżej znajdują się informacje o kursach, jakie świadczymy. Program
          jest przygotowywany{" "}
          <span className="text-yellow-600">
            <strong>indywidualnie dla każdego ucznia!</strong>
          </span>
          <br />
          Chętnie{" "}
          <span className="text-yellow-600">
            <strong>doradzimy w wyborze pierwszego instrumentu</strong>
          </span>
          , bądź zapewnimy
          <span className="text-yellow-600">
            <strong> lekcje próbne na kilku z nich.</strong>
          </span>{" "}
          Zachęcamy jednak do{" "}
          <a href="tel:698873023">
            <span className="text-yellow-600">
              <strong>kontaktu telefonicznego</strong>
            </span>
          </a>
          , gdyż podczas rozmowy zadamy pytania, które pomogą jak najlepiej
          dopasować ofertę do potrzeb Państwa dziecka.
        </motion.p>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-screen flex flex-col items-center"
          style={{ minHeight: "50vh" }}
        >
          <Accordion className="w-3/5  max-md:w-4/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontFamily: "Montserrat" }}>
                <b>Fortepian (pianino)</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                Oferujemy indywidualne
                <strong>
                  {" "}
                  lekcje gry na fortepianie / pianinie z przyjazdem do Państwa
                  domu
                </strong>
                . Odbywają się one w przyjaznej atmosferze, pod kierunkiem
                kompetentnego pedagoga (mgr fortepianu).{" "}
                <b>Realizujemy program szkół muzycznych</b>, włączając do niego
                również utwory muzyki filmowej, jak też popularnej. Nasi
                uczniowie{" "}
                <b>
                  odnoszą sukcesy na lokalnych oraz ogólnopolskich konkursach
                  muzycznych
                </b>
                . Zapraszamy także uczniów Szkół Muzycznych, potrzebujących
                korepetycji, lekcji uzupełniających bądź doraźnych konsultacji.
                Nasi pedagodzy są przygotowani, by{" "}
                <b>
                  pomóc w skomplikowanej sytuacji, opracować bądź skorygować
                  plan ćwiczenia
                </b>
                , projektowo <b>przygotować ucznia do nadchodzącego egzaminu</b>
                .
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5 max-md:w-4/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontFamily: "Montserrat" }}>
                <b>Skrzypce</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                Zapraszamy do{" "}
                <b>indywidualnych zajęć z gry na skrzypcach w Państwa domu</b>{" "}
                pod kierunkiem doświadczonego nauczyciela - instrumentalisty.
                Tworzymy także{" "}
                <b>
                  okazje do gry kameralnej (zespołowej), zwłaszcza podczas
                  corocznych Warsztatów muzycznych
                </b>
                . Zapraszamy także uczniów Państwowych Szkół Muzycznych,
                potrzebujących
                <b>
                  {" "}
                  korepetycji, lekcji uzupełniających bądź doraźnych konsultacji
                </b>
                . Nasi pedagodzy są przygotowani, by pomóc w takiej sytuacji,
                opracować bądź skorygować plan ćwiczenia, projektowo{" "}
                <b>przygotować ucznia do nadchodzącego egzaminu</b>.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5  max-md:w-4/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontFamily: "Montserrat" }}>
                <b>Teoria, kształcenie słuchu</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-justify"
                style={{ fontFamily: "Montserrat" }}
              >
                Istotną pozycją w rozwoju ucznia jest <b>wiedza teoretyczna</b>.
                Pod okiem nauczyciela-specjalisty zrozumiesz budowę utworu
                muzycznego. Nauczysz się <b>rozpoznawać ze słuchu</b> proste, a
                później bardziej złożone struktury muzyczne. <br></br>
                <br></br>
                Oferujemy zarówno kształcenie w oparciu o program nauczania
                przedmiotów teoretycznych, jak również{" "}
                <strong>
                  <b>korepetycje z kształcenia słuchu oraz teorii muzyki</b>
                </strong>{" "}
                przed egzaminami.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="w-3/5  max-md:w-4/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontFamily: "Montserrat" }}>
                <b>Klarnet</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                Zapraszamy na <b>indywidualne lekcje gry na klarnecie</b> pod
                okiem uznanego, posiadającego liczne sukcesy artystyczne i
                dydaktyczne nauczyciela. Podczas zajęć będzie rezalizowany
                zarówno <b>pion programowy Szkoły Muzycznej</b>, jak również
                pozycje z <b>literatury filmowej czy popularnej</b>. Uczeń
                będzie miał możliwość
                <b>uczestniczenia w warsztatach i spokaniach klarnetowych</b>,
                by wspólnie z innymi muzykami rozwijać swój talent.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5  max-md:w-4/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontFamily: "Montserrat" }}>
                <b>Śpiew</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                Oferujemy <b>indywidualne lekcje śpiewu</b> w różnej stylistyce
                oraz emisji głosu: <b>od klasycznej po muzykę pop</b>. Pracując
                pod okiem wykwalifikowanego wokalisty-pedagoga, uczeń{" "}
                <b>uniknie typowych błędów</b>, zdobędzie niezbędną wiedzę do
                komfortowego i <b>bezpiecznego dla zdrowia śpiewania</b>.
                Oferujemy także <b>konsultacje przez koncertami</b>, występami
                czy egzaminami, jak również przygotowanie do egzaminów wstępnych
                na kierunkach muzycznych i aktorskich.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5  max-md:w-4/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontFamily: "Montserrat" }}>
                <b>Organy piszczałkowe</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                Zapraszamy{" "}
                <b>
                  zarówno dzieci uczące się już wcześniej gry na fortepianie,
                  jak i nowe osoby
                </b>
                . Podczas zajęć będzie okazja poznać tajniki największego z
                instrumentów, usłyszeć zarówno pełne brzmienie{" "}
                <i>pleno organowego</i>, jak też subtelnych, fletowych głosów.{" "}
                <b>Gra na klawiaturze nożnej</b> (stopami) również będzie
                interesującym doświadczeniem, podobnie, jak{" "}
                <b>,,zwiedzanie" </b>
                wnętrza instrumentu. Z racji specyfiki zajęć, odbywają się one w
                zaprzyjaźnionych miejsach, posiadających taki instrument.
                Oferujemy także <b>kursy w zakresie gry liturgicznej</b>,
                akompaniamentu organowego oraz improwizacji.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5  max-md:w-4/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontFamily: "Montserrat" }}>
                <b>Organizacja koncetów</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                Nasz zespół posiada doświadczenie w{" "}
                <b>
                  organizowaniu wydarzeń muzycznych: koncertów, popisów,
                  warsztatów muzycznych dla dzieci i młodzieży
                </b>
                . Uczniowie zdobywają <b>praktykę sceniczną</b>, dzieląc się
                swoimi interpretacjami. <br />
                <br /> Wszystkie propozycje współpracy prosimy wysyłać w
                <b>
                  {" "}
                  <a href="/kontakt">formularzu w zakładce Kontakt</a>
                </b>
                .
                <br />
                <br />
                Zachęcamy także do śledzenia <b>wydarzeń koncertowych</b> przez
                media społecznościowe.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="w-3/5  max-md:w-4/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontFamily: "Montserrat" }}>
                <b>Muzyka na Twoim ślubie</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                Zajmujemy się także <b>muzyką podczas ślubów</b>. Zapewniamy
                <b>
                  {" "}
                  dyplomowanego organistę oraz wokalistów, skrzypków, harfistów,
                  wiolonczelistów
                </b>
                , jak również innych muzyków. Przygotowujemy indywidualny
                projekt utworów muzycznych, podpowiadamy,{" "}
                <b>
                  na co zwrócić uwagę, by uniknąć potencjanych problemów
                </b>. <br />
                <br />
                Cechuje nas wysoka jakosć, gdyż{" "}
                <b>
                  współpracują z nami jedynie zawodowi, odnoszący sukcesy,
                  kompetentni muzycy
                </b>
                .
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

export default Offers;
