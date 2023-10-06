import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Alert } from "@mui/material";
import emailjs from "@emailjs/browser";
import ScrollToTop from "react-scroll-to-top";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const form: any = useRef();
  const sendEmail = (e: any) => {
    e.preventDefault();

    if (fullName.length === 0) {
      setError("Pole imię i nazwisko musi być uzupełnione");
      return;
    } else if (mail.length === 0) {
      setError("Pole e-mail musi być uzupełnione");
      return;
    } else if (message.length === 0) {
      setError("Wiadomość nie może być pusta");
      return;
    } else {
      setError("");
    }

    emailjs
      .sendForm(
        "service_g6amyc8",
        "template_jvty8me",
        form.current,
        "pko4RY3Z0mnnP7p2G"
      )
      .then(
        (result: any) => {
          console.log(result);
          e.target.reset();
          setFullName("");
          setMail("");
          setMessage("");
        },
        (error: any) => {}
      );
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <motion.div
        style={{ minHeight: "78vh" }}
        className="w-screen bg-black flex flex-col items-center gap-36 max-sm:justify-center max-sm:gap-16 xl:pt-36 lg:'pt-28 md:pt-28 sm:pt-28 max-sm:pt-16 pb-10"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex items-center gap-36 max-lg:flex-col max-sm:gap-20"
        >
          <div className="flex flex-col justify-start items-center  gap-36 max-lg:flex-col max-sm:gap-20 pb-14">
            <motion.h2
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white text-4xl"
              style={{ fontFamily: "Montserrat" }}
            >
              Kontakt
            </motion.h2>
            <div className="flex gap-28 max-sm:flex-col">
              <div className="flex flex-col items-center gap-5">
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
                    <a href="tel:+48698873023">698 873 023</a>
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
                    <a href="mailto:kontakt@panodmuzyki.com.pl">
                      kontakt@panodmuzyki.com.pl
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col gap-1"
          >
            <h2
              className="text-center text-white pb-5 text-4xl max-sm:text-2xl"
              style={{ fontFamily: "Montserrat" }}
            >
              Skontaktuj się z nami!
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-3 max-md:items-center"
              style={{ fontFamily: "Montserrat" }}
            >
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full h-10 pl-2 max-md:w-3/4 rounded input form-control"
                type="text"
                name="user_name"
                placeholder="Imię i nazwisko"
              ></input>
              <input
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className="w-full max-md:w-3/4 h-10 pl-2 rounded input form-control"
                type="text"
                name="user_email"
                placeholder="E-mail"
              ></input>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full max-md:w-3/4 h-28 pl-2 rounded input form-control"
                name="message"
                placeholder="Wiadomość..."
              ></textarea>
              <button
                type="submit"
                onClick={() => {
                  if (
                    fullName.length !== 0 &&
                    mail.length !== 0 &&
                    message.length !== 0
                  ) {
                    alert(
                      "Dziękujemy za wiadomość. Skontaktujemy się niezwłocznie!"
                    );
                  }
                }}
                className="w-full max-md:w-3/4 text-white bg-yellow-600 rounded font-bold pt-1 pb-1"
                style={{ fontFamily: "Montserrat" }}
              >
                Wyślij
              </button>
              {error ? <Alert severity="error">{error}</Alert> : null}
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
      <ScrollToTop
        smooth
        top={100}
        component={<KeyboardArrowUpIcon />}
        color="blue"
        height="20"
        style={{ marginBottom: "30px" }}
      ></ScrollToTop>
      <Footer />
    </div>
  );
};

export default Contact;
