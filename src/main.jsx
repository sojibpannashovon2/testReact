import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Pages/Home/Home.jsx";

import MyLayout from "./Layout/MainLayout.jsx";

import SettingGuide from "./Component/SettingGuide.jsx";
import Shit from "./Component/Shit.jsx";
import Setup from "./Component/Setup.jsx";
import Rule from "./Component/Rule.jsx";

import Personnel from "./Dashboard/MainRoute/Personnel.jsx";
import AccessControl from "./Dashboard/MainRoute/AccessControl.jsx";
import Attendence from "./Dashboard/MainRoute/Attendence.jsx";
import Device from "./Dashboard/MainRoute/Device.jsx";
import MTD from "./Dashboard/MainRoute/MTD.jsx";
import Meeting from "./Dashboard/MainRoute/Meeting.jsx";
import Payroll from "./Dashboard/MainRoute/Payroll.jsx";
import System from "./Dashboard/MainRoute/System.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },

  {
    path: "/dashboard",
    Component: MyLayout,
    children: [
      {
        path: "persionnal",

        Component: Personnel,
        children: [
          { path: "setguide", Component: SettingGuide },
          { path: "shit", Component: Shit },
          { path: "setup", Component: Setup },
          { path: "rule", Component: Rule },
        ],
      },
      {
        path: "device",
        Component: Device,

        children: [
          { path: "setguide", Component: SettingGuide },
          { path: "shit", Component: Shit },
          { path: "setup", Component: Setup },
          { path: "rule", Component: Rule },
        ],
      },
      {
        path: "attendence",
        Component: Attendence,
        children: [
          { path: "setguide", Component: SettingGuide },
          { path: "shit", Component: Shit },
          { path: "setup", Component: Setup },
          { path: "rule", Component: Rule },
        ],
      },
      {
        path: "access-control",
        Component: AccessControl,
        children: [
          { path: "setguide", Component: SettingGuide },
          { path: "shit", Component: Shit },
          { path: "setup", Component: Setup },
          { path: "rule", Component: Rule },
        ],
      },
      {
        path: "payroll",
        Component: Payroll,
        children: [
          { path: "setguide", Component: SettingGuide },
          { path: "shit", Component: Shit },
          { path: "setup", Component: Setup },
          { path: "rule", Component: Rule },
        ],
      },
      {
        path: "metting",
        Component: Meeting,
        children: [
          { path: "setguide", Component: SettingGuide },
          { path: "shit", Component: Shit },
          { path: "setup", Component: Setup },
          { path: "rule", Component: Rule },
        ],
      },
      {
        path: "mtd",
        Component: MTD,
        children: [
          { path: "setguide", Component: SettingGuide },
          { path: "shit", Component: Shit },
          { path: "setup", Component: Setup },
          { path: "rule", Component: Rule },
        ],
      },
      {
        path: "system",
        Component: System,
        children: [
          { path: "setguide", Component: SettingGuide },
          { path: "shit", Component: Shit },
          { path: "setup", Component: Setup },
          { path: "rule", Component: Rule },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
