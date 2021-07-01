import React, { useContext } from 'react';

import IndexContext from '../hooks/IndexContext';
import InputFilterByName from './InputFilterByName';

export default function PlanetsTable() {
  const { data, filters: { filterByName: { name } } } = useContext(IndexContext);

  if (data) {
    const resultKeys = Object.keys(data[0]);

    return (
      <section>
        <InputFilterByName />
        <table>
          <caption>StarsWars Planets</caption>
          <thead>
            <tr>
              {resultKeys.map((eachResultKey) => (
                <th key={ eachResultKey }>
                  {eachResultKey}
                </th>))}
            </tr>
          </thead>
          <tbody>
            {data.filter((planet) => (planet.name
              .toUpperCase().includes(name.toUpperCase())))
              .map((planets, index) => (
                <tr key={ index }>
                  {resultKeys.map((resultKey) => (
                    <td key={ resultKey }>
                      {planets[resultKey]}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    );
  }

  return <section>Loading...</section>;
}
