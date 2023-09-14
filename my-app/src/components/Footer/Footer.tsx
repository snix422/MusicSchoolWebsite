import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className="w-screen h-20 bg-black flex justify-center items-center relative max-md:flex-col max-md:gap-2">
      <h5 className="text-white">Copywright © Pan od Muzyki 2023 </h5>
      <SocialMedia />
    </div>
  );
};

export default Footer;
