import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
