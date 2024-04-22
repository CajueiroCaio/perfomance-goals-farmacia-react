import React from 'react';
import './App.css';
import Home from './paginas/home/home';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
);
}
export default App;