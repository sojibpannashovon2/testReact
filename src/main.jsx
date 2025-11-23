import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Pages/Home/Home.jsx';

import MyLayout from './Layout/MainLayout.jsx';
import SettingGuide from './Component/SettingGuide.jsx';
import Shit from './Component/Shit.jsx';
import Setup from './Component/Setup.jsx';
import Rule from './Component/Rule.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Home,
    element: <div>Hello World</div>,
  },

  {
    path: "/dashboard",
    Component: MyLayout,
    children: [
          { path: "setguide", Component: SettingGuide },
          { path: "shit", Component: Shit },
          { path: "setup", Component: Setup },
          { path: "rule", Component: Rule },
        ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}/>

    
   
  </StrictMode>,
)
