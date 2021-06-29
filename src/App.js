import React from 'react';
import './App.css';

import PlanetsTable from './components/PlanetsTable';
import InputFilterByName from './components/InputFilterByName';
import StarWarsPlanetsProvider from './hooks/Provider';

function App() {
  return (
    <main>
      <StarWarsPlanetsProvider>
        <InputFilterByName />
        <PlanetsTable />
      </StarWarsPlanetsProvider>
    </main>
  );
}

export default App;
