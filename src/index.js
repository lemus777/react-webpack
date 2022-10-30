import React from 'react';
import { ReactDOM } from 'react-dom';
import App from './components/App';

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);