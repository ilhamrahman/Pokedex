
import React, { Component } from "react";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";

import pokemonData from "./pokemonData/pokemonData";
import Home from "./Home/Home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/pokemonData" component={pokemonData} />
                </Switch>
            </Router>
        )
    }
}
