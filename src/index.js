import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { getPersistor } from '@rematch/persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
const persistor = getPersistor()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
