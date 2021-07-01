import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import IndexContext from './IndexContext';
import GetPlanets from '../services/GetPlanets';

function StarWarsPlanetsProvider({ children }) {
  const [data, setData] = useState(null);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    async function FetchPlanets() {
      const allPlanets = await GetPlanets();
      allPlanets.map((planet) => delete planet.residents);
      setData(allPlanets);
    }
    FetchPlanets();
  }, []);

  const contextValue = {
    data,
    filters,
    setFilters,
  };

  return (
    <IndexContext.Provider value={ contextValue }>
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
