import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
import Providers from './providers';
import NavBar from './components/navBar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Providers>
        <NavBar/>
        <App />
      </Providers>
    </Router>
  </React.StrictMode>
)
