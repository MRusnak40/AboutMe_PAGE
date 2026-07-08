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
      <Route path="/om" element={<AboutMe />} />
      <Route path="/vzdelani" element={<Study />} />
      <Route path="/zkušenosti" element={<Knowlage />} />
      <Route path="/certifikaty" element={<Certificates />} />
      <Route path="/portfolio" element={<div><Portfolio></Portfolio></div>} />
      <Route path="/kontakt" element={<div><Contact></Contact></div>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

