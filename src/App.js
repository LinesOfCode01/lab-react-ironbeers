import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Allbeers from './Components/Allbeers';
import RandomBeer from './Components/Randombeer';
import NewBeer from './Components/Newbeer';
import BeerDetails from './Components/BeerDetails';
import axios from 'axios';


function App() {
  return (
    <div className="App">
   <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/" component={Allbeers} />
  <Route exact path="/Randombeer" component={(props)} => <Randombeer {...props} beers={beers} />} />
  <Route exact path="/Newbeer" component={Newbeer}/>
  <Route exact path="/beer/:drink" component={BeerDetails}/>
</Switch>;
    </div>
  );
}



export default App;
