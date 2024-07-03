import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'

import BaseApp from './BaseApp.jsx'
import BaseView from './BaseView.jsx'
import Pages from './pages/index.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseView content={<BaseApp />} />,
  },
  {
    path: "/maria-goretti",
    element: <BaseView content={<Pages.MariaGorettiPage />} />
  },
  {
    path: "/sejarah",
    element: <BaseView content={<Pages.SejarahPage />} />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
)
