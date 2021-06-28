import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import RequestAPI from '../services/RequestAPI';
import IndexContext from './IndexContext';

function StarWarsPlanetsProvider({ children }) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function FetchPlanets() {
      const planets = await RequestAPI();
      setData(planets);
    }
    FetchPlanets();
  }, []);

  return (
    <IndexContext.Provider value={ data }>
      { children }
    </IndexContext.Provider>
  );
}

StarWarsPlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  // Como dar um propType para um children:
  // https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
};

export default StarWarsPlanetsProvider;
