import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import './Css/index.css'

import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/AboutMe_PAGE/">
      <AppRouter /> 
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  </StrictMode>,
)

