import React, { useContext } from 'react';

import IndexContext from '../hooks/IndexContext';

export default function InputFilterByName() {
  const { data } = useContext(IndexContext);
  const { setResultFilterByName } = useContext(IndexContext);

  const handleChange = ({ target }) => {
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
