import React, { useCallback, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import IndexContext from './IndexContext';
import RequestPlanets from '../services/RequestPlanets';

export default function StarWarsPlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValue: [],
  });

  const filteringPlanets = useCallback(() => {
    const { column, comparison, value } = filters.filterByNumericValue[0];

    const filtereData = data.filter((eachData) => {
      if (comparison === 'maior que') {
        return Number(eachData[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(eachData[column]) < Number(value);
      }
      return Number(eachData[column]) === Number(value);
    });
    setData(filtereData);
  }, [data, filters]);

  useEffect(() => {
    if (update === true) {
      filteringPlanets();
    }
    setUpdate(false);
  }, [filteringPlanets, update]);
  // useCallBack e lógica dos Updates foi aprendido com Lara Karoline:
  // https://github.com/tryber/sd-010-b-project-starwars-planets-search/pull/49

  useEffect(() => {
    async function FetchPlanets() {
      const allPlanets = await RequestPlanets();
      allPlanets.map((planet) => delete planet.residents);
      setData(allPlanets);
    }
    FetchPlanets();
  }, []);

  const contextValue = {
    data,
    filters,
    setFilters,
    setUpdate,
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
