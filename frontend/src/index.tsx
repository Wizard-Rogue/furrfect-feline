import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from './components/main';
import breedsLoader from './components/main/breedsLoader';
import ErrorPage from './error-page';
import CatPage from './components/cats';
import Mosaic from './components/main/mosaic/mosaic';
import catLoader from './components/cats/catLoader';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route
        path="/"
        element={<App />}
        errorElement={<ErrorPage />}
      >
        <Route errorElement={<ErrorPage />} >
          <Route index element={<Mosaic />} loader={breedsLoader} />
          <Route
            path="/cats/:id"
            element={<CatPage />}
            loader={catLoader}
          >
          </Route>
        </Route>
      </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
