import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/redux/store.js';
// import Navbar from './components/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <Navbar /> */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
