import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage(props) {
  useEffect(() => {
    console.log('HomePage mounted');
  }, []);

  return (
    <div>
      <div>
        <h1>All Beers</h1>
        <p>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.`}
        </p>
      </div>

      <div>
        <h1>Random Beer</h1>
        <p>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.`}
        </p>
      </div>

      <div>
        <h1>New Beer</h1>
        <p>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.`}
        </p>
      </div>
    </div>
  );
}

export default HomePage;
