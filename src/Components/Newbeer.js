import React, { useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function NewBeer() {
  const history = useHistory();
  const [newbeerInfo, setbeerInfo] = useState({});

  function onChange(element) {
    newbeerInfo[element.target.name] = element.target.value;
    setbeerInfo(newbeerInfo);
    console.log(element.target.value, element.target.name);
  }

  function submitForm(element) {
    element.preventDefault();
    console.log(newbeerInfo);
    const response = axios.post(
      'https://ih-beers-api2.herokuapp.com/beers/new',
      newbeerInfo
    );
    console.log(response.data);
    history.push(`/beers`);
  }

  return (
    <form className="newBeer" onSubmit={submitForm}>
      <NavBar />
      <h1>Create a new beer</h1>

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
          type="text"
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

      <button className="button" type="submit" value="Submit">
        Add New Beer
      </button>
    </form>
  );
}

export default NewBeer;
