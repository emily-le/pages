import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import StartScreen from './StartScreen';
import SavedLists from './SavedLists';
import StartLocation from './Location';
import IngredientsList from './IngredientsList';
import StoreMap from './StoreMap';
import Email from './Email';
import Done from './Done';



export default function RouteLinks() {
return(
        <BrowserRouter>
    <Switch>
        <Route exact path="/" component={StartScreen} />
        <Route exact path="/savedlists" component={SavedLists} />
        <Route exact path="/location" component={StartLocation} />
        <Route exact path="/ingredientslist" component={IngredientsList} />
        <Route exact path="/storemap" component={StoreMap} />
        <Route exact path="/email" component={Email} />
        <Route exact path="/done" component={Done} />
        <Route component={() => (<div>404 Not found </div>)} />
    </Switch>
        </BrowserRouter>
)
}

