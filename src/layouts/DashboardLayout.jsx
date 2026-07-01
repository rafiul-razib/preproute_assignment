import React from "react";
import { NavLink, Outlet } from "react-router";
import Navbar from "../components/Navbar";

const drawerId = "dashboard-drawer";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id={drawerId} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex min-h-screen flex-col">
        <Navbar drawerId={drawerId} />
        <main className="flex-1 w-full p-6">
          <Outlet />
        </main>
      </div>
      <div className="drawer-side z-40">
        <label
          htmlFor={drawerId}
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu min-h-full w-80 gap-1 bg-base-200 p-4">
          <li>
            <NavLink
              to="/dashboard/test-create"
              className={({ isActive }) => (isActive ? "menu-active" : "")}
            >
              Test Creation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/test-tracking"
              className={({ isActive }) => (isActive ? "menu-active" : "")}
            >
              Test Tracking
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
