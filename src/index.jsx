import { createRoot } from 'react-dom/client';
import { App } from './pages/App';
import './global.css';

createRoot(document.querySelector('#app')).render(<App />);
