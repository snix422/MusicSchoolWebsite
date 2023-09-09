import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
