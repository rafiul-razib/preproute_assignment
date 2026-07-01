import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import TestCreation from "../pages/Dashboard/TestCreation";
import Login from "../pages/Login/Login";
import TestTracking from "../pages/Dashboard/TestTracking";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: "dashboard",
        Component: DashboardLayout,
        children: [
          {
            path: "test-create",
            Component: TestCreation,
          },
          {
            path: "test-tracking",
            Component: TestTracking,
          },
        ],
      },
    ],
  },
]);
