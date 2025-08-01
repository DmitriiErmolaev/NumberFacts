// import { BrowserRouter } from "react-router";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.scss'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)
