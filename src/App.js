import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';import Main from './Components/Main/Main';
import Errorhandle from './Components/Errorhandle/Errorhandle';
import Home from './Components/Home/Home';
import Table from './Components/Table/Table';
;
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children: [
        {
          path: '*',
          element: <Errorhandle></Errorhandle>
        },
        {
          path: '/',
          // loader: () => fetch('https://assignment-12-pi.vercel.app/categories'),
          element: <Home></Home>
        }
      ]
    }
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
