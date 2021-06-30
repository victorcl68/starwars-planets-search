import React, { useContext } from 'react';

import IndexContext from '../hooks/IndexContext';

export default function InputFilterByName() {
  const { data } = useContext(IndexContext);
  const { filter: { filterByName } } = useContext(IndexContext);
  const { setFilter } = useContext(IndexContext);
  // const { resultFilterByName } = useContext(IndexContext);
  const { setResultFilterByName } = useContext(IndexContext);

  const handleChange = ({ target }) => {
    // setFilter({ filterByName: target.value });
    const filterConst = data.filter(
      (result) => result.name.toLowerCase().includes(target.value.toLowerCase()),
    );
    setResultFilterByName(filterConst);
  };

  return (
    <label htmlFor="InputFilterByName">
      Filtro por nome:
      <input
        type="text"
        id="InputFilterByName"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </label>
  );
}
