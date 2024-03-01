import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@src/App';

const root: Element = document.getElementById('root') as Element;
const reactApp: ReactDOM.Root = ReactDOM.createRoot(root);
reactApp.render(<App />);
