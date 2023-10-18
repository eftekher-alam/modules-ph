import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './assets/components/users/Users.jsx';
import UpdateUser from './assets/components/updateUser/UpdateUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: async () => fetch("http://localhost:5000/users")
  },
  {
    path: "/update/:id",
    element: <UpdateUser></UpdateUser>,
    loader: async ({ params }) => fetch(`http://localhost:5000/updateUser/${params.id}`)
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
