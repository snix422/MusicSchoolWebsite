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
    <div className="w-screen h-40 max-md:h-56 bg-black relative flex justify-center items-center fixed ">
      <Link to="/">
        <img
          src={logoFirmowe}
          className="h-40 w-80 max-md:h-28 max-md:w-48 absolute left-4 top-8"
          alt="logo"
        ></img>
      </Link>

      <ul className="flex xl:gap-20 lg:gap-10 md:gap-6 ml-48 max-lg:hidden">
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

        {/* <li className="text-white link" style={{ fontFamily: "Montserrat" }}>
          <Link to="/partnerzy">Nasi partnerzy</Link>
        </li> */}
      </ul>
      <MenuIcon
        sx={{ color: "white" }}
        className="invisible absolute right-20 top-20 max-lg:visible"
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
          {/* <Link style={{ fontFamily: "Montserrat" }} to="/partnerzy">
            Nasi partnerzy
          </Link> */}
          <CloseIcon
            className="absolute right-6 top-2"
            onClick={() => setIsDrawerOpen(false)}
          />
        </div>
      </Drawer>
      <SocialMedia />
    </div>
  );
};

export default NavBar;
