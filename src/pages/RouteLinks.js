import React from "react";
import ReactDOM from "react-dom";
import { Route, IndexRoute, Switch, Router } from "react-router";

import StartScreen from './StartScreen';
import StartLocation from './Location';
import IngredientsList from './IngredientsList';
import StoreMap from './StoreMap';
import Email from './Email';

const RouteLinks = () => (
    <Switch>
        <Route exact path="/" component={StartScreen} />
        <Route exact path="/location" component={StartLocation} />
        <Route exact path="/ingredientslist" component={IngredientsList} />
        <Route exact path="/storemap" component={StoreMap} />
        <Route exact path="/email" component={Email} />
    </Switch>
)

export default RouteLinks