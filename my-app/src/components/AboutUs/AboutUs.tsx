import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="w-screen min-h-screen bg-black flex flex-col items-center gap-28 pt-10 pb-10 max-sm:justify-center max-sm:gap-10 xl:pt-28 lg:pt-28 md:pt-28 sm:pt-28">
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-4xl"
          style={{ fontFamily: "Montserrat" }}
        >
          O nas
        </motion.h2>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white max-md:text-lg w-3/5 text-justify text-xl max-sm:text-center"
          style={{ fontFamily: "Montserrat" }}
        >
          Nazywam się Łukasz Różyło, jestem pianistą, organistą, nauczycielem
          oraz organizatorem i animatorem życia muzycznego. Grę na fortepianie
          rozpocząłem w wieku 6 lat. Ukończyłem z wyróżenieniem Salezjańską
          Ogólnokształcącą Szkołę Muzyczną w Lutomiersku, a następnie studia
          magisterskie w specjalności: fortepian, w klasie prof. dr hab. Anny
          Wesołowskiej-Firlej. Następnie studiowałem organy pod kierunkiem dr
          hab. Krzysztofa Urbaniaka, prof. AM; dyplom licencjacki obroniłem z
          wyróżnieniem. Otrzymałem liczne nagrody na ogólnopolskich oraz
          międzynarodowych konkursach muzycznych: byłem półfinalistą
          Międzynarodowego Konkursu Organowego im. D. Buxtehudego w Lubece
          (2022), 3 nagrodę na Ogólnopolskim Konkursie Kameralnym: Organy -
          partner w kameralistyce (2022), cz wyróżnienie na Ogólnopolskim
          Konkursie Organowym im. B. Rutkowskiego w Krakowie (2021).
          Wspólpracowałem m.in. z Chórem oraz Orkiestrą Symfoniczną Filharmonii
          Łódzkiej. Występowałem na ogólnopolskich i międzynarodowych
          festiwalach muzycznych, m.in. w Pasłęku, Rumii, Tarnobrzegu,
          Sandomierzu, Legnickim Polu. Moją pasją jest pedagogika muzyczna - od
          lat współtworzę Letnie oraz Zimowe Warsztaty Dzieci Suzuki w
          Lutomiersku i Uniejowie. Pracuję także w Państowej Szkole Muzycznej I
          i II stopnia w Kutnie, jako pianista oraz akompaniator.
          <br />
          <br /> Do zespołu zapraszam wyłącznie profesjonalnych, kompetentnych
          muzyków, uzdolnionych pedagogicznie. W tej kwestii jestem
          bezkompromisowy - uważam, że droższa lekcja z doświadczonym
          nauczycielem, szczególnie na początku, jest dużo bardziej wydajna, niż
          nieco tańsza w wykonaniu praktykanta. Pasjonuje mnie tworzenie
          procesów, przez co czas lekcji nie jest zagospodarowany przypadkowo.
          Wyniki naszych uczniów są mierzalne, a proces nabywania kompetencji -
          powtarzalny.
        </motion.p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
