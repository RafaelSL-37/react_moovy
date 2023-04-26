import React from 'react';
import { routes } from './navigation/router';
import { useRoutes } from 'react-router-dom';

function App() {
  let element = useRoutes(routes);

  return (
    <div>
      {element}
    </div>
  );
}

export default App;
