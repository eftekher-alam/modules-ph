import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./App.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Posts></Posts>,
        loader: async () => fetch("http://localhost:5000/posts")
      },
      {
        path: "/post/:id",
        element: <Post></Post>,
        loader: async ({ params }) => fetch(`http://localhost:5000/post/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
