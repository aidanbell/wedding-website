import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import App from './App.tsx'
import './index.css'

const router = createBrowserRouter([
  { path: "/", id: "home", element: <App />, children: [
    { path: "/RSVP", id: "RSVP", element: <App /> },
    { path: "/registry", id: "registry", element: <App /> },
    { path: "/FAQs", id: "FAQs", element: <App /> },
    { path: "/photos", id: "photos", element: <App /> },
    { path: "/contact", id: "contact", element: <App /> },
  ]},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
