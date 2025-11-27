import React from 'react';
import 'primeicons/primeicons.css';
// import "primereact/resources/primereact.min.css";
// import "primereact/resources/themes/lara-light-cyan/theme.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import Home from '../views/home';
import { GameProvider } from './context/GameContext';


import './App.css'

function App() {

  return (
    <>
      <PrimeReactProvider>
        <GameProvider>
          <BrowserRouter>
            <Routes>
              {/* <Route path="/login" element={<Login />} />  */}
              <Route path="/" element={<Home />} />
              {/* <Route path="/galeria" element={<Galeria />} /> */}

            </Routes>
          </BrowserRouter>
        </GameProvider>
      </PrimeReactProvider>
    </>
  )
}

export default App
