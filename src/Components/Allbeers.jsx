import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const AllBeers = () => {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      setBeer(response.data);
    });
  }, []);

  const showBeers = () => {
    return beer.map((beer, i) => {
      return (
        <div className="beerOptions" key={beer._id}>
          <div>
            <img className="beerImg" src={beer.image_url} alt={beer.name} />
          </div>
          <div className="beerInfo">
            <Link to={`/beers/${beer._id}`}>
              <h2>{beer.name}</h2>
            </Link>
            <h3>{beer.tagline}</h3>
            <p>
              <b>Created by:</b> {beer.contributed_by}
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <NavBar />
      {showBeers()}
    </div>
  );
};

export default AllBeers;
