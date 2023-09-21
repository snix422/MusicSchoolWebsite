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
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollToTop from 'react-scroll-to-top';

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
                Fortepian (pianino)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                Oferujemy indywidualne lekcje gry na fortepianie / pianinie z
                przyjazdem do Państwa domu. Odbywają się one w przyjaznej
                atmosferze, pod kierunkiem kompetentnego pedagoga (mgr
                fortepianu). Realizujemy więc program szkół muzycznych,
                włączając do niego również utwory muzyki filmowej, jak też
                popularnej. Nasi uczniowie odnoszą sukcesy na lokalnych oraz
                ogólnopolskich konkursach muzycznych. Zapraszamy także uczniów
                Szkół Muzycznych, potrzebujących korepetycji, lekcji
                uzupełniających bądź doraźnych konsultacji. Nasi pedagodzy są
                przygotowani, by pomóc w skomplikowanej sytuacji, opracować bądź
                skorygować plan ćwiczenia, projektowo przygotować ucznia do
                nadchodzącego egzaminu.
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
                Skrzypce
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                Zapraszamy do indywidualnych zajęć z gry na skrzypcach w Państwa
                domu pod kierunkiem doświadczonego nauczyciela -
                instrumentalisty. Tworzymy także okazje do gry kameralnej
                (zespołowej), zwłaszcza podczas corocznych Wartsztów muzycznych.
                Zapraszamy także uczniów Szkół Muzycznych, potrzebujących
                korepetycji, lekcji uzupełniających bądź doraźnych konsultacji.
                Nasi pedagodzy są przygotowani, by pomóc w takiej sytuacji,
                opracować bądź skorygować plan ćwiczenia, projektowo przygotować
                ucznia do nadchodzącego egzaminu.
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
                Teoria, kształcenie słuchu
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-justify"
                style={{ fontFamily: "Montserrat" }}
              >
                Istotną pozycją w rozwoju ucznia jest wiedza teoretyczna. Pod
                okiem nauczyciela-specjalisty zrozumiesz budowę utworu
                muzycznego. Nauczysz się rozpoznawać ze słuchu proste, a później
                bardziej złożone struktury muzyczne. <br></br>
                <br></br>
                Oferujemy zarówno kształcenie w oparciu o program nauczania
                przedmiotów teoretycznych, jak również{" "}
                <strong>
                  korepetycje z kształcenia słuchu oraz teorii muzyki
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
                Klarnet
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                Zapraszamy na indywidualne lekcje gry na klarnecie pod okiem
                uznanego, posiadającego liczne sukcesy artystyczne i dydaktyczne
                nauczyciela. Podczas zajęć będzie rezalizowany zarówno pion
                programowy Szkoły Muzycznej, jak również pozycje z literatury
                filmowej czy popularnej. Uczeń będzie miał możliwość
                uczestniczenia w warsztatach i spokaniach klarnetowych, by
                wspólnie z innymi muzykami rozwijać swój talent.
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
                Śpiew
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                Oferujemy indywidualne lekcje śpiewu w różnej stylistyce oraz
                emisji głosu: od klasycznej po muzykę pop. Pracując pod okiem
                wykwalifikowanego wokalisty-pedagoga, uczeń nauczy się
                kontrolować emisję głosu, uniknie typowych błędów, zdobędzie
                niezbędną wiedzę do komfortowego i bezpiecznego dla zdrowia
                śpiewania. Oferujemy także konsultacje przez egzaminami,
                występami czy koncertami, jak również przygotowanie do egzaminów
                wstępnych na kierunkach muzycznych i aktorskich.
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
                Organy piszczałkowe
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                Zapraszamy zarówno dzieci uczące się już wcześniej gry na
                fortepianie, jak i nowe osoby. Podczas zajęć będzie okazja
                poznać tajniki największego z instrumentów, usłyszeć zarówno
                pełne brzmienie <i>pleno organowego</i>, jak też subtelnych,
                fletowych głosów. Gra na klawiaturze nożnej (stopami) również
                będzie interesującym doświadczeniem, podobnie, jak ,,zwiedzanie"
                wnętrza instrumentu. Z racji specyfiki zajęć, odbywają się one w
                zaprzyjaźnionych miejsach, posiadających taki instrument.
                Oferujemy także kursy w zakresie gry liturgicznej,
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
                Organizacja koncetów
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                Nasz zespół posiada doświadczenie w organizowaniu wydarzeń
                muzycznych: koncertów, popisów, warsztatów muzycznych dla dzieci
                i młodzieży. Uczniowie zdobywają praktykę sceniczną, dzieląc się
                swoimi interpretacjami. <br />
                <br /> Wszystkie propozycje współpracy prosimy zamieszcać w
                formularzu w zakładce Kontakt.
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
                Muzyka na Twoim ślubie
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-left"
                style={{ fontFamily: "Montserrat" }}
              >
                Zajmujemy się także muzyką podczas ślubów. Zapewniamy
                dyplomowanego organistę oraz wokalistów, skrzypków, harfistów,
                wiolonczelistów, jak również innych muzyków. Przygotowujemy
                indywidualny projekt utworów muzycznych, podpowiadamy, na co
                zwrócić uwagę, by uniknąć potencjanych problemów. <br />
                <br />
                Cechuje nas wysoka jakosć, gdyż współpracują z nami jedynie
                zawodowi, odnoszący sukcesy kompetentni muzycy.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      </div>
      <ScrollToTop smooth top={100} component={<KeyboardArrowUpIcon />} color="blue" height="20" style={{marginBottom:'40px'}} >
    </ScrollToTop>
      <Footer />
    </div>
  );
};

export default Offers;
