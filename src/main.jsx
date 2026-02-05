import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // Nhớ import App
import './index.css' // Nếu có file css chung

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)