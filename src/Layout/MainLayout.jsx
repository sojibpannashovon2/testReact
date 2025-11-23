// src/Layout/MainLayout.jsx
import React, { useEffect, useMemo, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Menu,
  Sun,
  Moon,
  User,
  Smartphone,
  CalendarCheck,
  Shield,
  Wallet,
  Users,
  FileText,
  Bell,
  Search,
  ChevronDown,
  ChevronRight,
  LogOut,
  Home,
  Settings as IconSettings,
} from "lucide-react";

/**
 * MainLayout - Dashboard
 *
 * Features:
 * - Sidebar with icons, collapse/expand, mobile drawer
 * - Topbar with search, notifications, profile dropdown, dark mode
 * - Breadcrumb built from location pathname
 * - Sub-tabs depending on parent route
 * - Animated content area with framer-motion
 * - Footer
 */

export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  // Sidebar states
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // UI state
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [search, setSearch] = useState("");
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // main menu items (better icon set)
  const menuItems = useMemo(
    () => [
      { name: "Persionnal", path: "/dashboard/persionnal", icon: <User /> },
      { name: "Device", path: "/dashboard/device", icon: <Smartphone /> },
      {
        name: "Attendence",
        path: "/dashboard/attendence",
        icon: <CalendarCheck />,
      },
      {
        name: "Access Control",
        path: "/dashboard/access-control",
        icon: <Shield />,
      },
      { name: "Payroll", path: "/dashboard/payroll", icon: <Wallet /> },
      { name: "Meeting", path: "/dashboard/metting", icon: <Users /> },
      { name: "MTD", path: "/dashboard/mtd", icon: <FileText /> },
      { name: "System", path: "/dashboard/system", icon: <IconSettings /> },
    ],
    []
  );

  // sub-tabs for each parent (reuse same child names)
  const subMenus = useMemo(
    () => ({
      persionnal: [
        { name: "Setting Guide", path: "/dashboard/persionnal/setguide" },
        { name: "Shit", path: "/dashboard/persionnal/shit" },
        { name: "Setup", path: "/dashboard/persionnal/setup" },
        { name: "Rule", path: "/dashboard/persionnal/rule" },
      ],
      device: [
        { name: "Set Guide", path: "/dashboard/device/setguide" },
        { name: "Shit", path: "/dashboard/device/shit" },
        { name: "Setup", path: "/dashboard/device/setup" },
        { name: "Rule", path: "/dashboard/device/rule" },
      ],
      attendence: [
        { name: "Set Guide", path: "/dashboard/attendence/setguide" },
        { name: "Shit", path: "/dashboard/attendence/shit" },
        { name: "Setup", path: "/dashboard/attendence/setup" },
        { name: "Rule", path: "/dashboard/attendence/rule" },
      ],
      "access-control": [
        { name: "Set Guide", path: "/dashboard/access-control/setguide" },
        { name: "Shit", path: "/dashboard/access-control/shit" },
        { name: "Setup", path: "/dashboard/access-control/setup" },
        { name: "Rule", path: "/dashboard/access-control/rule" },
      ],
      payroll: [
        { name: "Set Guide", path: "/dashboard/payroll/setguide" },
        { name: "Shit", path: "/dashboard/payroll/shit" },
        { name: "Setup", path: "/dashboard/payroll/setup" },
        { name: "Rule", path: "/dashboard/payroll/rule" },
      ],
      metting: [
        { name: "Set Guide", path: "/dashboard/metting/setguide" },
        { name: "Shit", path: "/dashboard/metting/shit" },
        { name: "Setup", path: "/dashboard/metting/setup" },
        { name: "Rule", path: "/dashboard/metting/rule" },
      ],
      mtd: [
        { name: "Set Guide", path: "/dashboard/mtd/setguide" },
        { name: "Shit", path: "/dashboard/mtd/shit" },
        { name: "Setup", path: "/dashboard/mtd/setup" },
        { name: "Rule", path: "/dashboard/mtd/rule" },
      ],
      system: [
        { name: "Set Guide", path: "/dashboard/system/setguide" },
        { name: "Shit", path: "/dashboard/system/shit" },
        { name: "Setup", path: "/dashboard/system/setup" },
        { name: "Rule", path: "/dashboard/system/rule" },
      ],
    }),
    []
  );

  // helper to get parent key (segment after /dashboard/)
  const pathParts = location.pathname.split("/").filter(Boolean); // ["dashboard","persionnal","setguide"]
  const parentKey = pathParts[1] || "persionnal"; // default to persionnal
  const activeTabs = subMenus[parentKey] ?? subMenus["persionnal"];

  // breadcrumbs
  const breadcrumbs = useMemo(() => {
    const parts = location.pathname.split("/").filter(Boolean);
    const crumbs = [];
    let acc = "";
    parts.forEach((p, i) => {
      acc += `/${p}`;
      crumbs.push({
        name: i === 0 ? "Dashboard" : p.replace(/-/g, " "),
        path: acc,
      });
    });
    return crumbs;
  }, [location.pathname]);

  // Example notifications (static)
  const notifications = [
    { id: 1, text: "New user registered", time: "2m" },
    { id: 2, text: "Payroll processed", time: "1h" },
    { id: 3, text: "Device offline", time: "2d" },
  ];

  // quick search handler (example: navigate to first matched route)
  function handleSearchSubmit(e) {
    e.preventDefault();
    if (!search) return;
    // for simplicity try to match a main route by name
    const q = search.toLowerCase();
    const found = menuItems.find((m) => m.name.toLowerCase().includes(q));
    if (found) {
      navigate(found.path);
      setSearch("");
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 dark:text-white transition-colors">
      {/* TOP NAV */}
      <header className="flex items-center justify-between gap-4 px-4 py-3 bg-blue-600 dark:bg-blue-900 text-white">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-2 rounded hover:bg-blue-500"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <span className="text-2xl font-bold">
              ZK<span className="text-white">T</span> ECO
            </span>
            <span className="hidden sm:inline text-sm opacity-90">Admin</span>
          </div>
        </div>

        {/* SEARCH */}
        <form onSubmit={handleSearchSubmit} className="flex-1 max-w-xl px-4">
          <div className="relative">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search menu (e.g. device, payroll)..."
              className="w-full rounded-md border px-10 py-2 text-sm bg-white dark:bg-gray-800 dark:border-gray-700"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search size={16} />
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <button
                type="submit"
                className="text-sm px-2 py-1 rounded bg-blue-500 hover:bg-blue-600 hidden sm:inline"
              >
                Go
              </button>
            </div>
          </div>
        </form>

        {/* TOP ACTIONS */}
        <div className="flex items-center gap-3">
          {/* notifications */}
          <div className="relative">
            <button
              onClick={() => {
                setNotifOpen(!notifOpen);
                setProfileOpen(false);
              }}
              className="p-2 rounded hover:bg-blue-500"
              aria-label="Notifications"
            >
              <Bell size={18} />
            </button>

            {notifOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 text-black dark:text-white rounded shadow-lg z-40"
              >
                <div className="p-3 border-b dark:border-gray-700 flex justify-between items-center">
                  <strong>Notifications</strong>
                  <button
                    className="text-sm text-blue-600"
                    onClick={() => {
                      /* clear logic */
                    }}
                  >
                    Clear
                  </button>
                </div>
                <div className="max-h-48 overflow-auto">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className="p-3 border-b last:border-b-0 dark:border-gray-700"
                    >
                      <div className="text-sm">{n.text}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {n.time}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* profile */}
          <div className="relative">
            <button
              className="flex items-center gap-2 p-1 rounded hover:bg-blue-500"
              onClick={() => {
                setProfileOpen(!profileOpen);
                setNotifOpen(false);
              }}
            >
              <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold">
                AR
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-sm">Md Arifur</div>
                <div className="text-xs opacity-80">Admin</div>
              </div>
              <ChevronDown size={16} />
            </button>

            {profileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 text-black dark:text-white rounded shadow-lg z-40"
              >
                <div className="p-3 border-b dark:border-gray-700">
                  <div className="font-semibold">Md Arifur Rahman</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Frontend Developer
                  </div>
                </div>

                <button
                  onClick={() => navigate("/dashboard")}
                  className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Home size={14} className="inline-block mr-2" /> Dashboard
                  Home
                </button>

                <button
                  onClick={() => navigate("/dashboard/persionnal")}
                  className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <User size={14} className="inline-block mr-2" /> Profile
                </button>

                <div className="border-t dark:border-gray-700 p-2">
                  <button className="w-full flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </header>

      <div className="flex flex-1 min-h-[calc(100vh-64px)]">
        {/* SIDEBAR - desktop */}
        <motion.aside
          initial={{ width: 220 }}
          animate={{ width: collapsed ? 72 : 220 }}
          className="hidden md:block bg-slate-800 dark:bg-gray-800 text-white"
        >
          <div className="p-3 flex flex-col gap-4">
            <button
              onClick={() => setCollapsed((c) => !c)}
              className="p-2 rounded hover:bg-slate-700 self-end"
              aria-label="Toggle collapse"
            >
              <Menu size={16} />
            </button>

            <nav className="flex flex-col gap-1">
              {menuItems.map((m) => (
                <NavLink
                  key={m.path}
                  to={m.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 rounded mx-2 ${
                      isActive ? "bg-white text-black" : "hover:bg-slate-700"
                    }`
                  }
                >
                  <div className="w-6">{m.icon}</div>
                  {!collapsed && <span className="text-sm">{m.name}</span>}
                </NavLink>
              ))}
            </nav>
          </div>
        </motion.aside>

        {/* MOBILE SIDEBAR (drawer) */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              className="relative bg-slate-800 w-64 h-full p-4 text-white"
            >
              <button className="mb-4" onClick={() => setMobileOpen(false)}>
                Close
              </button>
              <nav className="flex flex-col gap-2">
                {menuItems.map((m) => (
                  <NavLink
                    key={m.path}
                    to={m.path}
                    className="flex items-center gap-3 p-2 rounded hover:bg-slate-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="w-6">{m.icon}</div>
                    <span className="text-sm">{m.name}</span>
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          </div>
        )}

        {/* MAIN CONTENT */}
        <main className="flex-1 p-5">
          {/* Breadcrumb */}
          <div className="mb-3 text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
            {breadcrumbs.map((b, idx) => (
              <span key={b.path} className="flex items-center gap-2">
                <NavLink to={b.path} className="hover:underline">
                  {b.name}
                </NavLink>
                {idx < breadcrumbs.length - 1 && <ChevronRight size={14} />}
              </span>
            ))}
          </div>

          {/* SUB TABS */}
          <div className="mb-4 flex flex-wrap gap-3">
            {activeTabs.map((tab) => (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={({ isActive }) =>
                  `px-3 py-1 rounded text-sm border ${
                    isActive
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-white dark:bg-gray-700 text-black dark:text-white"
                  }`
                }
              >
                {tab.name}
              </NavLink>
            ))}
          </div>

          {/* Animated content */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-100 dark:bg-gray-800 p-5 rounded shadow"
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
