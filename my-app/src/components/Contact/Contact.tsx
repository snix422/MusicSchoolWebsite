import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Alert } from "@mui/material";

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

    /*emailjs.sendForm('service_bysdvel', 'template_z4h8j7g', form.current, '5E4w16biVWeMYXUDt')
          .then((result:any) => {
              e.target.reset();
              setFullName('');
              setMail('');
              setMessage('')
          }, (error:any) => {
          });*/
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <motion.div className="w-screen min-h-screen bg-yellow-900 flex flex-col items-center gap-36 max-sm:justify-center max-sm:gap-28 xl:pt-36 lg:'pt-28 md:pt-28 sm:pt-28 max-sm:pt-16 pb-10">
        {/* <motion.h2
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-3xl"
          style={{ fontFamily: "Montserrat" }}
        >
          Kontakt
        </motion.h2> */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col items-center gap-36 max-lg:flex-col"
        >
          <div className="flex justify-center gap-36 max-lg:flex-col">
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
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col gap-1"
          >
            <h2
              className="text-center text-white pb-5 text-4xl"
              style={{ fontFamily: "Montserrat" }}
            >
              Skontatuj się z Nami!
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
      <Footer />
    </div>
  );
};

export default Contact;
