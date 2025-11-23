import React from "react";
import { Outlet } from "react-router-dom";

export default function Personnel() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Personnel Module</h2>
      {/* content sections / child routes */}
      <Outlet />
    </div>
  );
}
