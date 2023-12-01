// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css'; 
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import { createRoot } from 'react-dom';
import Modal from 'react-modal';

// Your main component (e.g., App)
import App from './App';

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Use createRoot to render your app
const root = createRoot(rootElement);
Modal.setAppElement('#root');
root.render(<App />);
