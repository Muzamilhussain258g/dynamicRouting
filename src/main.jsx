import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Detail from './pages/Detail.jsx'
import User from './pages/User.jsx'

let router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path='/' element={<User/>} />
    <Route path='/:id' element={<Detail />} />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <RouterProvider router={router} />
  </StrictMode>,
)
