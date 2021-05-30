import React from "react";
import PropTypes from "prop-types";

const TableRow = ({ data, destroyTask, updateTask }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200 mb-px">
      {data.map(rowData => (
        <tr key={rowData.id}>
          <td className="px-6 py-4 text-2xl font-medium text-center leading-5 text-bb-gray whitespace-no-wrap bg-gray-100">
            <i className="ri-pushpin-2-fill p-4 cursor-pointer text-bg-gray-400 hover:text-purple-500"></i>
          </td>
          <td
            className="p-4 text-md break-all
            leading-5 text-bb-gray max-w-xs"
          >
            <a
              className="underline hover:text-gray-700 cursor-pointer"
              href=""
              target="_blank"
            >
              {rowData.original_url}
            </a>
          </td>
          <td
            className="p-4 text-md break-all
            leading-5 text-right cursor-pointer max-w-xs"
          >
            <a
              className="underline hover:text-gray-700 cursor-pointer"
              href=""
              target="_blank"
            >
              {rowData.shortened_url}
            </a>
          </td>
          <td
            className="px-6 py-4 text-md
            leading-5 text-center bg-gray-100"
          >
            VistCount
          </td>
        </tr>
      ))}
    </tbody>
  );
};

TableRow.propTypes = {
  data: PropTypes.array.isRequired,
  destroyTask: PropTypes.func,
  updateTask: PropTypes.func,
};

export default TableRow;
