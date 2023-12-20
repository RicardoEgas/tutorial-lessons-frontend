import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/Navbar.jsx';
import { Provider } from 'react-redux'; 
import store from './redux/store'; 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
        <Navbar />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
