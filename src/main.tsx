import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import { ViteReactSSG } from 'vite-react-ssg/single-page';

import App from '@src/App';

export const createRoot = ViteReactSSG(<App />);
