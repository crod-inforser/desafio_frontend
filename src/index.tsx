import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { appStore } from './redux/store'
import App from './views';

import '@fontsource/roboto/300.css';
import './style.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
