import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.querySelector('.warpper')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
