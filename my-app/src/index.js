import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {list} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App items={list} />
  </React.StrictMode>
);
