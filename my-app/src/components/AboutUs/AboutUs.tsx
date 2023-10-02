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
          className="text-white max-md:text-lg w-4/5 text-justify text-xl max-sm:text-center"
          style={{ fontFamily: "Montserrat" }}
        >
            Nasz zespół tworzą <span className="text-yellow-600">
            <strong>wyłącznie profesjonalni, kompetentni
          muzycy, uzdolnieni pedagogicznie</strong>
          </span>. W tej kwestii jesteśmy
          bezkompromisowi - uważamy, że nawet droższa <span className="text-yellow-600">
            <strong>lekcja pod okiem doświadczonego
          nauczyciela, szczególnie na początku, jest dużo bardziej wydajna, niż
          pozornie tańsza w wykonaniu kogoś, kto jeszcze sam jest uczniem.</strong>
          </span>{" "} Pasjonuje nas tworzenie
          procesów, przez co czas lekcji nie jest zagospodarowany przypadkowo.
          Wyniki naszych uczniów są mierzalne, a proces nabywania kompetencji -
          powtarzalny.
          <br />
          <br />
          Założycielem i inicjatorem projektu jest <span className="text-yellow-600">
            <strong>Łukasz Różyło - pianista, organista, kameralista</strong>
          </span>,
          nauczyciel oraz organizator życia muzycznego. Grę na
          fortepianie rozpoczął w wieku 6 lat w Sandomierzu. <br />
          <br />
          Ukończył z wyróżenieniem Salezjańską Ogólnokształcącą Szkołę
          Muzyczną w Lutomiersku, a następnie 
            studia magisterskie w
          specjalności: fortepian, w klasie prof. dr hab. Anny
          Wesołowskiej-Firlej. Następnie 
            studiował grę na organach pod kierunkiem dr
          hab. Krzysztofa Urbaniaka, prof. AM; dyplom licencjacki obronił z
          wyróżnieniem
          . Osiągał sukcesy podczas ogólnopolskich oraz
          międzynarodowych konkursów muzycznych: był półfinalistą
          Międzynarodowego Konkursu Organowego im. Dietricha Buxtehudego w
          Lubece (2022), laureatem 3 nagrody na Ogólnopolskim Konkursie Kameralnym: Organy
          - partner w kameralistyce (2022), jak również wyróżnienia na
          VIII Ogólnopolskim Konkursie Organowym im. Bronisława Rutkowskiego w
          Krakowie (2021). <br />
          <br />
          Wspólpracował m.in. z Chórem oraz Orkiestrą Symfoniczną Filharmonii
          Łódzkiej. Występował na ogólnopolskich oraz międzynarodowych
          festiwalach muzycznych, m.in. w Pasłęku, Rumii, Tarnobrzegu czy
          Sandomierzu. Pasjonując się pedagogiką muzyczną, od
          lat współorganizuje <span className="text-yellow-600">
            <strong>Letnie oraz Zimowe Warsztaty Dzieci Suzuki w
          Lutomiersku i Uniejowie</strong>
          </span>. Pracuje także w Państowej Szkole Muzycznej I
          i II stopnia w Kutnie jako pianista oraz akompaniator. Pełni
          funkcję Kierownika Artystycznego III Festiwalu Młodych Muzyków im.
          Miłosza Magina w Łasku.
        </motion.p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
