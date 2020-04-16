
//import { Router, Switch, Route } from "react-router-dom";
import React, { Component } from 'react';
import { Link, BrowserRouter, Switch, useHistory } from 'react-router-dom';
//import { createBrowserHistory as history} from 'history';
import history from './../history'
//import { StackNavigator } from 'react-navigation';
import charmander from './charmander.png';
import charmeleon from './Charmeleon.png';
import charizard from './Charizard.png';
import squirtle from './squirtle.png';
import wartortle from './wartortle.png';
import blastoise from './Blastoise.png';
import bulbasaur from './bulbasaur.png';
import ivysaur from './ivysaur.png';
import venusaur from './venusaur.png';
import './Home.css';

export default class MainActivity extends Component {

render() {
  return (
    <div className="App">
      <header className="pictures">
      <button><img src={charmander} className="logo" alt="logo" onClick={() => history.push('/pokemonData')} /></button>
      <button><img src={charmeleon} className="logo" alt="logo" onClick={() => history.push('/pokemonData')} /></button>
      <button><img src={charizard} className="logo" alt="logo" onClick={() => history.push('/pokemonData')} /></button>
      </header>

      <header className="pictures">
      <button><img src={squirtle} className="logo" alt="logo"   onClick={() => history.push('/pokemonData')} /></button>
      <button><img src={wartortle} className="logo" alt="logo" onClick={() => history.push('/pokemonData')} /></button>
      <button><img src={blastoise} className="logo" alt="logo" onClick={() => history.push('/pokemonData')} /></button>
      </header>

      <header className="pictures">
      <button><img src={bulbasaur} className="logo" alt="logo"   onClick={() => history.push('/pokemonData')} /></button>
      <button><img src={ivysaur} className="logo" alt="logo" onClick={() => history.push('/pokemonData')} /></button>
      <button><img src={venusaur} className="logo" alt="logo" onClick={() => history.push('/pokemonData')} /></button>
      </header>
     
       </div>

  );
}

}
