import React, { useContext } from 'react';

import IndexContext from '../hooks/IndexContext';

export default function PlanetsTable() {
  const { data, resultFilterByName } = useContext(IndexContext);

  if (data && resultFilterByName) {
    const resultKeys = Object.keys(data[0]);

    return (
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
          {resultFilterByName.map((result) => (
            <tr key={ result.name }>
              {resultKeys.map((resultKey) => (
                <td key={ resultKey }>
                  {result[resultKey]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return <section>Loading...</section>;
}
