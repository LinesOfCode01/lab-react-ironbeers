import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const AllBeers = (props) => {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      console.log(response.data);
      setBeer(response.data);
    });
  }, []);

  const showBeers = () => {
    return beer.map((beer) => {
      return (
        <div className="beerOptions">
          <div>
            <img className="beerImg" src={beer.image_url} alt="" />
          </div>
          <div className="beerInfo">
            <Link to={`/beer/${beer._id}`}>
              <h2>{beer.name}</h2>
              <img src={beer.imgae_url} alt="" />
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
