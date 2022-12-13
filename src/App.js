import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCustom from './components/Navbar/Navbar';
import MainRoots from './components/Navbar/MainRoots';

import './components/Navbar/AbboutMe.css'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarCustom />
        <MainRoots />
      </BrowserRouter>
    </div>
  );
};

export default App;