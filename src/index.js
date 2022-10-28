import React from 'react';
import ReactDOM from 'react-dom';

import App from './routes/App';
import { AppContextProvider } from './context/AppContext';

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById('app')
);
