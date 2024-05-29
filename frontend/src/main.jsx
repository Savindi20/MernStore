import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'  // Import the compiled Tailwind CSS
import { Route, RouterProvider, createRoutesFromElements } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.js'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} />,
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>  // Wrap the RouterProvider in a Provider
    <RouterProvider router={routes} />
  </Provider>
)
