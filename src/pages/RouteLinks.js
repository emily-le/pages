import React from "react";
import ReactDOM from "react-dom";
import { Route, IndexRoute, Switch } from "react-router";

const RouteLinks = () => (
    <Switch>
        <Route exact path="/" component={StartScreen} />
        <Route exact path="/location component={Location} />
        <Route exact path="/ingredientslist" component={IngredientsList} />
        <Route exact path="/storemap" component={StoreMap} />
        <Route exact path="/email" component={Email} />
    </Switch>
)

export default RouteLinks