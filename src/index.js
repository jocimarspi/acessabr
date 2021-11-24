import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.scss';

import Header from './components/Header';
import Home from './pages/Home';
import Curator from './components/Curator';

const CONFIG = {
  city: "Mandaguari",
  state: "PR"
}

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <Header city={CONFIG.city} state={CONFIG.state}/>
      <Home city={CONFIG.city}/>
      <Curator />
    </div>
  </div>
  ,
  document.getElementById('root')
);