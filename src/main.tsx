import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './Css/index.css'


import { BrowserRouter } from 'react-router-dom'

import { AppRouter } from './router/AppRouter'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>,
)

