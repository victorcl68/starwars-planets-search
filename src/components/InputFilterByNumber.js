import React, { useContext, useState } from 'react';

import IndexContext from '../hooks/IndexContext';

export default function InputFilterByNumber() {
  const { setFilters, setUpdate, filters } = useContext(IndexContext);
  const [changeFilters, setChangeFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const handleChangeInputFilter = ({ target: { name, value } }) => {
    setChangeFilters({ ...changeFilters, [name]: value });
  };

  const handleClick = (numberValues) => {
    setFilters(
      { ...filters,
        filterByNumericValue: [...filters.filterByNumericValue, numberValues] },
    );
    setUpdate(true);
  };

  const columnArray = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const comparisonArray = ['maior que', 'menor que', 'igual a'];

  return (
    <section>
      <label htmlFor="column">
        Colunas:
        <select
          id="column"
          name="column"
          data-testid="column-filter"
          onChange={ handleChangeInputFilter }
        >
          {columnArray.map((eachColumn, index) => (
            <option
              key={ index }
              value={ eachColumn }
            >
              {eachColumn}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison">
        Comparadores:
        <select
          id="comparison"
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handleChangeInputFilter }
        >
          {comparisonArray.map((eachComparison, index) => (
            <option
              key={ index }
              value={ eachComparison }
            >
              {eachComparison}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="value">
        Valor:
        <input
          id="value"
          type="number"
          name="value"
          data-testid="value-filter"
          onChange={ handleChangeInputFilter }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick(changeFilters) }
      >
        Filtre!
      </button>
    </section>
  );
}
