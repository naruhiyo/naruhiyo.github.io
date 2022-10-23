import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@src/components/App';
import '@src/plugins/i18n';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(<App />);
