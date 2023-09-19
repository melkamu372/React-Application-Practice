import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import FunctionalInput from './components/Todo.jsx'
import OrderTask from './components/OrderTask.jsx'
import ReciveTask from './components/ReceiveTask.jsx'

const rootPath='/React-Application-Practice'
const router = createBrowserRouter([
  {
    path: rootPath,
    element: <App />,
  },
  {
    path: rootPath+"/profile",
    element: <FunctionalInput />,
    children: [
      { path: "order", element: <OrderTask /> },
      { path: "recive", element: <ReciveTask /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
