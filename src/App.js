import React from 'react';
import './App.css';

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
