import React from 'react';

export default function InputFilterByName() {
  return (
    <label htmlFor="InputFilterByName">
      Filtro por nome:
      <input
        type="text"
        id="InputFilterByName"
        data-testid="name-filter"
      />
    </label>
  );
}
