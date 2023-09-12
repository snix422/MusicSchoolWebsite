import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <motion.div className="w-screen min-h-screen bg-yellow-900 flex flex-col items-center gap-36 max-sm:justify-center max-sm:gap-28 xl:pt-36 lg:'pt-28 md:pt-28 sm:pt-28 max-sm:pt-16 pb-10">
        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-3xl"
          style={{ fontFamily: "Montserrat" }}
        >
          Kontakt
        </motion.h2>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex justify-center gap-36 max-lg:flex-col"
        >
          <div className="flex flex-col gap-5">
            <h2
              className="text-white text-2xl"
              style={{ fontFamily: "Montserrat" }}
            >
              Telefon
            </h2>
            <div className="flex gap-5">
              <PhoneIcon sx={{ color: "white" }} />
              <h3
                className="text-white text-xl"
                style={{ fontFamily: "Montserrat" }}
              >
                698 873 023
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2
              className="text-white text-2xl"
              style={{ fontFamily: "Montserrat" }}
            >
              E-mail
            </h2>
            <div className="flex gap-5">
              <EmailIcon sx={{ color: "white" }} />
              <h3
                className="text-white text-xl"
                style={{ fontFamily: "Montserrat" }}
              >
                panodmuzykipl@gmail.com
              </h3>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Contact;
