import React from "react";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-1" className="btn drawer-button">
          Open drawer
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-1"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Test Creation</a>
          </li>
          <li>
            <a>Test Tracking</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
