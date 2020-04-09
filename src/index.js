import React from 'react';
import ReactDOM from 'react-dom';
import AppContextProvider from './AppContext/AppContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
