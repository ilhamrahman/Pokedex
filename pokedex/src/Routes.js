
import React, { Component } from "react";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./Home/Home";
import history from './history';
import charmander from "./pokemonData/charmander";
import charmeleon from "./pokemonData/charmeleon";
import charizard from "./pokemonData/charizard";
import squirtle from "./pokemonData/squirtle";
import wartortle from "./pokemonData/wartortle";
import blastoise from "./pokemonData/blastoise";
import bulbasaur from "./pokemonData/bulbasaur";
import ivysaur from "./pokemonData/ivysaur";
import venusaur from "./pokemonData/venusaur";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/charmander" component={charmander} />
                    <Route path="/charmeleon" component={charmeleon} />
                    <Route path="/charizard" component={charizard} />
                    <Route path="/squirtle" component={squirtle} />
                    <Route path="/wartortle" component={wartortle} />
                    <Route path="/blastoise" component={blastoise} />
                    <Route path="/bulbasaur" component={bulbasaur} />
                    <Route path="/ivysaur" component={ivysaur} />
                    <Route path="/venusaur" component={venusaur} />
                </Switch>
            </Router>
        )
    }
}
