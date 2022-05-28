import React from 'react'
import ReactDOM from 'react-dom/client'

import 'normalize.css'
import App from './components/App'
import './plugins/i18n'

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(<App />)
