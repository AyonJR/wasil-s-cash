import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './layout/Home.jsx';
import Products from './layout/products/Products.jsx';
import Form from './form/Form.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
       {
        path : "/" , 
        element: <Products></Products>
       } ,
       {
        path: "/form/:id", 
        element: <Form></Form>
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>,
)
