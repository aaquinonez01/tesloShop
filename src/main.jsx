import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from './themes/lightTheme.js';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ lightTheme}>
        <CssBaseline />
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
