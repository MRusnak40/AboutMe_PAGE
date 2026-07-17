import { Navigate, Route, Routes } from 'react-router-dom'
import App from '../App'
import AboutMe from '../Components/AboutMe'

import Study from '../Components/Study'
import Certificates from '../Components/Certificates'
import Contact from '../Components/Contact'
import Portfolio from '../Components/Portfolio'
import Knowlage from '../Components/Knowlage'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/" element={<App/>} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/education" element={<Study />} />
      <Route path="/experience" element={<Knowlage />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/portfolio" element={<div><Portfolio></Portfolio></div>} />
      <Route path="/contact" element={<div><Contact></Contact></div>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

