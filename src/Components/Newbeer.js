import axios from 'axios';
import React, { useState } from 'react';
import NavBar from './NavBar';

function NewBeer(props) {
  let [newbeerInfo, setbeerInfo] = useState({});

  function onChange(element) {
    newbeerInfo[element.target.name] = element.target.value;
    setbeerInfo(newbeerInfo);
    console.log(newbeerInfo);
  }

  function submitForm(element) {
    element.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newbeerInfo)
      .then((response) => console.log(response));
  }

  return (
    <div>
      <NavBar />
      <form onSubmit={submitForm}>
        <h1>Create new beer</h1>

        <div>
          <label htmlFor="floatingInput">Name:</label>
          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="floatingInput">Tagline:</label>
          <input
            required
            type="text"
            name="tagline"
            placeholder="Tagline"
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="floatingInput">Description:</label>
          <input
            required
            type="text"
            name="description"
            placeholder="Description"
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="floatingInput">First Brewed:</label>
          <input
            required
            type="text"
            name="firstBrewed"
            placeholder="First Brewed"
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="floatingInput">Brewers Tips:</label>
          <input
            required
            type="text"
            name="brewer_tips"
            placeholder="Brewer Tips"
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="floatingInput">Name:</label>
          <input
            required
            type="number"
            name="attenuation_level"
            placeholder="Attenuation Level"
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="floatingInput">Contributed by:</label>
          <input
            required
            type="text"
            name="contributed_by"
            placeholder="Contributed by"
            onChange={onChange}
          />
        </div>

        <input type="submit" value="Add New Beer"></input>
      </form>
    </div>
  );
}

export default NewBeer;
