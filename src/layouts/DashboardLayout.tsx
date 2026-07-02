import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import logo from "../assets/preproute lofo.png";
import { FaArrowTrendUp, FaRegPenToSquare } from "react-icons/fa6";
import {
  MdContentPasteSearch,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const drawerId = "my-drawer-4";

const sidebarLinks = [
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: FaArrowTrendUp,
    end: true,
  },
  {
    to: "/dashboard/test-create",
    label: "Test Creation",
    icon: FaRegPenToSquare,
    end: false,
  },
  {
    to: "/dashboard/test-tracking",
    label: "Test Tracking",
    icon: MdContentPasteSearch,
    end: false,
  },
];

const DashboardLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  return (
    <div className="flex min-h-screen flex-col">
      <nav className="navbar sticky top-0 z-50 h-16 min-h-16 w-full bg-base-300">
        <div className="flex-1 px-4">
          <img src={logo} alt="PrepRoute logo" className="h-8 w-auto" />
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-30 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="drawer flex-1 lg:drawer-open">
        <input
          id={drawerId}
          type="checkbox"
          className="drawer-toggle"
          checked={isDrawerOpen}
          onChange={(event) => setIsDrawerOpen(event.target.checked)}
        />

        <div className="drawer-content min-h-[calc(100dvh-4rem)]">
          <main className="p-4">
            <Outlet />
          </main>
        </div>

        <div className="drawer-side !top-16 z-40 !h-[calc(100dvh-4rem)] is-drawer-close:overflow-visible">
          <label
            htmlFor={drawerId}
            aria-label="close sidebar"
            className="drawer-overlay"
          />
          <div className="flex min-h-full w-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            <ul className="menu w-full grow p-2">
              <li>
                <label
                  htmlFor={drawerId}
                  aria-label={isDrawerOpen ? "close sidebar" : "open sidebar"}
                  className={`is-drawer-close:tooltip is-drawer-close:tooltip-right ${
                    isDrawerOpen ? "justify-end" : ""
                  }`}
                  data-tip={isDrawerOpen ? "Close sidebar" : "Open sidebar"}
                >
                  {isDrawerOpen ? (
                    <MdKeyboardDoubleArrowLeft className="size-4" />
                  ) : (
                    <MdKeyboardDoubleArrowRight className="size-4" />
                  )}
                  <span className="is-drawer-close:hidden">
                    {/* {isDrawerOpen ? "Collapse" : "Expand"} */}
                  </span>
                </label>
              </li>

              {sidebarLinks.map(({ to, label, icon: Icon, end }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      `is-drawer-close:tooltip is-drawer-close:tooltip-right ${
                        isActive ? "bg-base-300 font-medium text-[#5988EF]" : ""
                      }`
                    }
                    data-tip={label}
                  >
                    <Icon className="size-4" />
                    <span className="is-drawer-close:hidden">{label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
