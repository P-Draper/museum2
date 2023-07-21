import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Abstract from './routes/Abstract';
import Cubism from './routes/Cubism';
import Expressionism from './routes/Expressionism';
import Futurism from './routes/Futurism';
import Impressionism from './routes/Impressionism';
import Renaissance from './routes/Renaissance';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => fetch("http://localhost:4005/movements").then(response => response.json()),
    children: [
      {
        path: "Abstract",
        element: <Abstract />
      },
      {
        path: "Cubism",
        element: <Cubism />

      },
      {
        path: "Expressionism",
        element: <Expressionism />

      },
      {
        path: "Futurism",
        element: <Futurism />
      },
      {
        path: "Renaissance",
        element: <Renaissance />
      },
      {
        path: "Impressionism",
        element: <Impressionism />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 className='topheader'>🏛️FLATIRON MUSEUM🏛️</h1>
    <hr></hr>
    <RouterProvider router={router} />
    <hr></hr>
  </React.StrictMode>
);
