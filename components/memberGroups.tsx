"use client";

import React from "react";

export default function MemberGroupsTable() {
  const rows = [
    { id: 1, name: "John Brown", age: 45, address: "New York No. 1 Lake Park" },
    { id: 2, name: "Jim Green", age: 27, address: "London No. 1 Lake Park" },
    { id: 3, name: "Joe Black", age: 31, address: "Sidney No. 1 Lake Park" },
    { id: 4, name: "Edward King", age: 16, address: "LA No. 1 Lake Park" },
    { id: 5, name: "Jim Red", age: 45, address: "Melbourne No. 1 Lake Park" },
  ];

  return (
    <div className="min-w-full">
      <div className="border border-gray-200 rounded-lg overflow-x-auto 
        [&::-webkit-scrollbar]:h-2 
        [&::-webkit-scrollbar-thumb]:rounded-full 
        [&::-webkit-scrollbar-track]:bg-gray-100 
        [&::-webkit-scrollbar-thumb]:bg-gray-300">

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 ps-4">
                <input
                  type="checkbox"
                  className="size-4 rounded border-gray-300 text-blue-600 focus:ring-0"
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                Address
              </th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 ps-4">
                  <input
                    type="checkbox"
                    className="size-4 rounded border-gray-300 text-blue-600 focus:ring-0"
                  />
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {row.name}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {row.age}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {row.address}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    type="button"
                    className="px-3 py-1.5 text-sm font-semibold text-red-600 hover:text-red-700
                    hover:underline transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}