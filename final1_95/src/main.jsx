import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App_95 from './App_95.jsx'
import './index.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer position='top-center' autoClose={2000} />
    <App_95 />
  </StrictMode>
)
