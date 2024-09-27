import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // Cria a raiz do React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
