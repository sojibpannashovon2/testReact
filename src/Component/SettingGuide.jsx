import React from "react";
export default function SettingGuide() {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold text-green-600">Setting Guide</h3>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="p-6 border rounded text-center">
          <div className="text-2xl">☕</div>
          <div className="font-semibold mt-2">Set Break Time</div>
          <p className="text-sm text-gray-500">Set break time for employees</p>
        </div>
        <div className="p-6 border rounded text-center">
          <div className="text-2xl">📍</div>
          <div className="font-semibold mt-2">Set Timetable</div>
          <p className="text-sm text-gray-500">
            Set time when employees start and end
          </p>
        </div>
        <div className="p-6 border rounded text-center">
          <div className="text-2xl">🗓️</div>
          <div className="font-semibold mt-2">Set Shift</div>
          <p className="text-sm text-gray-500">Set shifts for employees</p>
        </div>
        <div className="p-6 border rounded text-center">
          <div className="text-2xl">👥</div>
          <div className="font-semibold mt-2">Set Schedule</div>
          <p className="text-sm text-gray-500">Assign shifts to employees</p>
        </div>
      </div>
    </div>
  );
}
