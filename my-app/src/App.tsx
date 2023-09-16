import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import ForWhom from './components/ForWhom/ForWhom';
import AboutUs from './components/AboutUs/AboutUs';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import OurPartners from './components/OurPartners/OurPartners';
import Offers from './components/Offers/Offers';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollToTop from 'react-scroll-to-top';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='oferta' element={<Offers />} />
            <Route path='dlakogo' element={<ForWhom />} />
            <Route path='onas' element={<AboutUs />} />
            <Route path='galeria' element={<Gallery/>} />
            <Route path='kontakt' element={<Contact/>} />
            <Route path='partnerzy' element={<OurPartners />} />
        </Routes>
      </BrowserRouter>
      <ScrollToTop smooth={true} top={500} component={<KeyboardArrowUpIcon />} color="blue" height="20" >
    </ScrollToTop>
    </div>
  );
}

export default App;
