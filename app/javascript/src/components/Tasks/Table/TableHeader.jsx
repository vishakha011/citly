import React from "react";
import { compose, head, join, juxt, tail, toUpper } from "ramda";

const TableHeader = () => {
  return (
    <thead className="bg-purple-700 text-white">
      <tr>
        <th className="w-1"></th>
        <th
          className="px-6 py-3 text-xs font-bold leading-4 tracking-wider
        text-left text-bb-gray-600 text-opacity-50 uppercase bg-gray-50"
        >
          Original
        </th>
        <th
          className="px-6 py-3 text-sm font-bold leading-4 tracking-wider
        text-left text-bb-gray-600 text-opacity-50 bg-gray-50"
        >
          Short Url
        </th>
        <th className="px-6 py-3 bg-gray-50"></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
