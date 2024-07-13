import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/Root.jsx'
import Login from './routes/Auth/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: '/shop',
        element: <h1>Shop</h1>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
