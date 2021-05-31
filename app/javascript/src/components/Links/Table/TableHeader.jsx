import React from "react";
import { compose, head, join, juxt, tail, toUpper } from "ramda";

const TableHeader = () => {
  return (
    <thead className="bg-purple-600 text-white">
      <tr>
        <th className="rounded-t rounded-tr-none"></th>
        <th
          className="px-6 py-3 text-lg leading-4 tracking-wider
        text-center text-opacity-50 bg-gray-50 "
        >
          Original
        </th>
        <th
          className="px-6 py-3 text-lg leading-4 tracking-wider
        text-center text-opacity-50 bg-gray-50 rou "
        >
          Short Url
        </th>
        <th className="rounded-r rounded-br-none"></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
