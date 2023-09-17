import ScrollToTop from "react-scroll-to-top";
import SocialMedia from "./SocialMedia";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer = () => {
  return (
    <div className="w-screen h-20 bg-black flex justify-center items-center relative max-md:flex-col max-md:gap-2">
      <ScrollToTop smooth={true} top={500} component={<KeyboardArrowUpIcon />} color="blue" height="20" style={{marginBottom:'40px'}}>
    </ScrollToTop>
      <h5 className="text-white">Copywright © Pan od Muzyki 2023 </h5>
      <SocialMedia />
    </div>
  );
};

export default Footer;
