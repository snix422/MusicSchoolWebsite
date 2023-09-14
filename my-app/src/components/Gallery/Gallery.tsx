import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import img1 from "../../assets/images/gallery/1.jpg";
import img2 from "../../assets/images/gallery/2.jpg";
import img3 from "../../assets/images/gallery/3.jpeg";
import img4 from "../../assets/images/gallery/4.jpg";
import img5 from "../../assets/images/gallery/5.jpg";
import img6 from "../../assets/images/gallery/6.jpg";
import img7 from "../../assets/images/gallery/7.jpg";
import img8 from "../../assets/images/gallery/8.jpg";
import img9 from "../../assets/images/gallery/9.jpg";
import img11 from "../../assets/images/gallery/11.jpg";
import img12 from "../../assets/images/gallery/12.jpeg";
import { Modal } from "@mui/material";
import { useState } from "react";

const Gallery = () => {
  const photos = [img1, img2, img3, img4, img5, img8, img9, img11, img12];
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState<any>();

  const handleOpen = (img: any): any => {
    setOpen(true);
    setCurrentImg(img);
  };
  const handleClose = () => {
    setOpen(false);
    setCurrentImg(null);
  };
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="w-screen min-h-screen bg-black flex flex-col items-center gap-28 max-sm:justify-center max-sm:gap-10 xl:pt-36 lg:'pt-48 md:pt-28 sm:pt-28 pb-10 max-sm:pt-10">
        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-4xl"
          style={{ fontFamily: "Montserrat" }}
        >
          Galeria zdjęć
        </motion.h2>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-4/5 max-md:w-screen flex flex-wrap justify-center gap-28 max-lg:flex-col max-lg:items-center"
        >
          {photos.map((photo: any) => {
            return (
              <img
                onClick={() => handleOpen(photo)}
                src={photo}
                alt="galeria"
                className="lg:w-1/5 xl:w-1/3 h-80 bg-gray-100 rounded md:w-2/5 sm:w-3/5 max-sm:w-4/5 max-sm:h-48 hover:scale-125 transition-all cursor-pointer"
              />
            );
          })}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
