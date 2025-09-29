import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './pages/Home.tsx'
import { SpeedInsights } from "@vercel/speed-insights/next"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
    <SpeedInsights />
  </StrictMode>,
)
