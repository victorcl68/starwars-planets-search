import React from 'react';

import PlanetsTable from './components/PlanetsTable';
import StarWarsPlanetsProvider from './hooks/Provider';

function App() {
  return (
    <main>
      <StarWarsPlanetsProvider>
        <PlanetsTable />
      </StarWarsPlanetsProvider>
    </main>
  );
}

export default App;
