import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../../App.css";
import { Drawer } from "@mui/material";
import SocialMedia from "../Footer/SocialMedia";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import logoFirmowe from "../../assets/images/logoNavBar/Original Logo.png";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="w-screen h-40 bg-black relative flex justify-center items-center fixed ">
      <Link to="/">
        <img
          src={logoFirmowe}
          className="h-40 w-80 max-md:h-28 max-md:w-48 absolute left-4 top-8"
          alt="logo"
        ></img>
      </Link>

      <ul className="flex xl:gap-10 lg:gap-10 md:gap-6 ml-48 max-xl:hidden">
        <li className="text-white link" style={{ fontFamily: "Montserrat" }}>
          <Link to="/faq">Typowe pytania</Link>
        </li>
        <li className="text-white link" style={{ fontFamily: "Montserrat" }}>
          <Link to="/oferta">Oferta edukacyjna</Link>
        </li>
        <li className="text-white link" style={{ fontFamily: "Montserrat" }}>
          <Link to="/dlakogo">Dla kogo?</Link>
        </li>
        <li className="text-white link" style={{ fontFamily: "Montserrat" }}>
          <Link to="/onas">O nas</Link>
        </li>
        <li className="text-white link" style={{ fontFamily: "Montserrat" }}>
          <Link to="/galeria">Galeria</Link>
        </li>
        <li className="text-white link" style={{ fontFamily: "Montserrat" }}>
          <Link to="/kontakt">Kontakt</Link>
        </li>
        <li>
          <SocialMedia />
        </li>

        {/* <li className="text-white link" style={{ fontFamily: "Montserrat" }}>
          <Link to="/partnerzy">Nasi partnerzy</Link>
        </li> */}
      </ul>
      <MenuIcon
        sx={{ color: "white" }}
        className="invisible absolute right-20 top-20 max-xl:visible"
        onClick={() => setIsDrawerOpen(true)}
      />
      <Drawer
        anchor={"top"}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div className="flex flex-col bg-black text-white items-center gap-5 pb-10 pt-10 relative">
          <Link style={{ fontFamily: "Montserrat" }} to="/">
            Strona główna
          </Link>
          <Link style={{ fontFamily: "Montserrat" }} to="/faq">
            Typowe pytania
          </Link>
          <Link style={{ fontFamily: "Montserrat" }} to="/oferta">
            Oferta edukacyjna
          </Link>
          <Link style={{ fontFamily: "Montserrat" }} to="/dlakogo">
            Dla kogo?
          </Link>
          <Link style={{ fontFamily: "Montserrat" }} to="/onas">
            O nas
          </Link>
          <Link style={{ fontFamily: "Montserrat" }} to="/galeria">
            Galeria
          </Link>
          <Link style={{ fontFamily: "Montserrat" }} to="/kontakt">
            Kontakt
          </Link>
          <div className="flex gap-5">
          <Link
        to="https://www.facebook.com/people/Pan-od-Muzyki/61551393304760/"
        target="blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="35"
          height="35"
          viewBox="0 0 48 48"
        >
          <path
            fill="#3F51B5"
            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
          ></path>
          <path
            fill="#FFF"
            d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
          ></path>
        </svg>
      </Link>
      <Link to="https://www.youtube.com/@Panodmuzykipl" target="blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="35"
          height="35"
          viewBox="0 0 48 48"
        >
          <path
            fill="#FF3D00"
            d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
          ></path>
          <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
        </svg>
      </Link>
          </div>
          {/* <Link style={{ fontFamily: "Montserrat" }} to="/partnerzy">
            Nasi partnerzy
          </Link> */}
          <CloseIcon
            className="absolute right-6 top-2"
            onClick={() => setIsDrawerOpen(false)}
          />
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
