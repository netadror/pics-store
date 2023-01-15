import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvidor } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvidor>
    <Router>
      <App />
    </Router>
  </ContextProvidor>
);

reportWebVitals();
