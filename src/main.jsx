import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Root'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import ListedBooks from './Pages/ListedBooks';
import PagesToRead from './Pages/PagesToRead';
import BookDetails from './Components/BookDetails';
import { ToastContainer } from 'react-toastify';
import Read from './Components/Read';
import WhistList from './Components/WhistList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>

      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>, 
        children: [
          {
            index: true,
            element: <Read></Read>
          },
          {
            path: "whist-list",
            element: <WhistList></WhistList>
          }
        ]
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/books-details/:bookId",
        element:<BookDetails></BookDetails>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
  </React.StrictMode>,
)