import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter} from "react-router-dom";
import "./custom.css";
import "./cms.css";

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
     <App />
  </BrowserRouter>
);
