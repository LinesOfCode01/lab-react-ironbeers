import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import AllBeers from './Components/AllBeers';
import RandomBeer from './Components/RandomBeer';
import Newbeer from './Components/NewBeer';
import BeerDetails from './Components/BeerDetails';
import axios from 'axios';
import './App.css';

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      setBeers(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={AllBeers} />
        <Route
          exact
          path="/RandomBeer"
          component={(props) => <RandomBeer {...props} beers={beers} />}
        />
        <Route exact path="/Newbeer" component={Newbeer} />
        <Route exact path="/beer/:drink" component={BeerDetails} />
      </Switch>
    </div>
  );
}

export default App;
