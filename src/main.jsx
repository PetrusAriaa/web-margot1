import React from 'react'
import ReactDOM from 'react-dom/client'
import BaseApp from './BaseApp.jsx'
import BaseView from './BaseView.jsx'
import './index.css'
import MariaGorettiPage from './pages/MariaGoretti.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseView content={<BaseApp />} />,
  },
  {
    path: "/maria-goretti",
    element: <BaseView content={<MariaGorettiPage />} />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
