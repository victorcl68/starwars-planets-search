import React, { useContext } from 'react';

import IndexContext from '../hooks/IndexContext';

export default function InputFilterByName() {
  const { filters, setFilters,
    filters: { filterByName: { name } } } = useContext(IndexContext);

  const handleChange = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };

  return (
    <label htmlFor="InputFilterByName">
      Filtragem por nome:
      <input
        value={ name }
        type="text"
        id="InputFilterByName"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </label>
  );
}
