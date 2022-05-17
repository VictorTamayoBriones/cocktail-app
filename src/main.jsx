import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ProviderDrinks } from './context/drinks'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ProviderDrinks>
      <App />
    </ProviderDrinks>
    </BrowserRouter>
  </React.StrictMode>
)
