import React from "react";
import ReactDOM from "react-dom";
import { Route, IndexRoute, Switch, Router } from "react-router";

import StartScreen from './StartScreen';
import SavedLists from './SavedLists';
import StartLocation from './Location';
import IngredientsList from './IngredientsList';
import StoreMap from './StoreMap';
import Email from './Email';
import Done from './Done';

const RouteLinks = () => (
    <Switch>
        <Route exact path="/start" component={StartScreen} />
        <Route exact path="/savedlists" component={SavedLists} />
        <Route exact path="/location" component={StartLocation} />
        <Route exact path="/ingredientslist" component={IngredientsList} />
        <Route exact path="/storemap" component={StoreMap} />
        <Route exact path="/email" component={Email} />
        <Route exact path="/done" component={Done} />
    </Switch>
)

export default RouteLinks