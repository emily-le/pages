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
    <Router basename={'/G-graph'}>
        <Route exact path={`#process.env.PUBLIC_URL}/start`} component={StartScreen} />
        <Route exact path={`#process.env.PUBLIC_URL}/savedlists`} component={SavedLists} />
        {/*
        <Route exact path="/location" component={StartLocation} />
        <Route exact path="/ingredientslist" component={IngredientsList} />
        <Route exact path="/storemap" component={StoreMap} />
        <Route exact path="/email" component={Email} />
        <Route exact path="/done" component={Done} />
        */}
    </Router>
)

export default RouteLinks