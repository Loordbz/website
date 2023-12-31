import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/inicio/inicio.jsx'
import Sobre from './pages/sobre/sobre.jsx'
import Projetos from './pages/projetos/projeto.jsx'
import Contato from './pages/contato/contato.jsx'
import ErrorPage from './pages/err/erro.jsx'

const router = createBrowserRouter([
  {
    path: "/website",
    element: <App />,
    children: [
      {
        path: "/website",
        element: <Home />
      },
      {
        path: "/website/sobre",
        element: <Sobre />
      },
      {
        path: "/website/projetos",
        element: <Projetos />
      },
      {
        path: "/website/contato",
        element: <Contato />
      },
      {
        path: "/website/erro",
        element: <ErrorPage />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
