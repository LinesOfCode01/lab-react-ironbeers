import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

function BeerDetails(props) {
  console.log(props);

  const [beer, setBeer] = useState([]);

  useEffect(() => {
    if (props.match.path === '/allBeers/:beerId') {
      axios
        .get(
          `https://ih-beers-api2.herokuapp.com/beers/${props.match.params.beerId}`
        )
        .then((response) => {
          setBeer(response.data);
        });
    } else if (props.match.path === '/random-beer') {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/`)
        .then((response) => {
          setBeer(
            response.data[Math.floor(Math.random() * response.data.length)]
          );
        });
    }
  }, []);
  console.log(beer);

  let printBeerDetails = () => {
    return (
      <div style={{ marginTop: '4rem' }}>
        <img style={{ height: '10rem' }} src={beer.image_url} alt="" />
        <div>
          <b>Name:</b>
          {beer.name}
        </div>
        <div>{beer.tagline}</div>
        <div>
          <b>First Brewed:</b>
          {beer.first_brewed}
        </div>
        <div>
          <b>Attenuation:</b>
          {beer.attenuation_level}
        </div>
        <div style={{ paddingLeft: '10rem', paddingRight: '10rem' }}>
          {beer.description}
        </div>
        <div>
          <b>contributed by:</b>
          {beer.contributed_by}
        </div>
      </div>
    );
  };

  return (
    <div>
      <NavBar />
      {printBeerDetails}
    </div>
  );
}

export default BeerDetails;
