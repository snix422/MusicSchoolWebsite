import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const AboutUs = () => {
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
          O nas
        </motion.h2>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-lg w-3/5"
          style={{ fontFamily: "Montserrat" }}
        >
          Nazywam się Łuaksz Różyło, jestem pianistą, organistą, nauczycielem
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
        </motion.p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;