import { createRoot } from 'react-dom/client';
import Modal from 'react-modal';

// Your main component (e.g., App)
import App from './App';

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Use createRoot to render your app
const root = createRoot(rootElement);
Modal.setAppElement('#root');
root.render(<App />);
