import React from "react";
import PropTypes from "prop-types";

const TableRow = ({ data, destroyTask, updateTask }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200 mb-px">
      {data.map(rowData => (
        <tr key={rowData.id}>
          <td
            className="px-6 py-4 text-sm font-medium
            leading-5 text-bb-gray whitespace-no-wrap"
          >
            <i className="ri-pushpin-2-fill"></i>
          </td>
          <td
            className="px-6 py-4 text-sm font-medium
            leading-5 text-bb-gray whitespace-no-wrap"
          >
            <a
              className="underline hover:text-gray-700"
              href=""
              target="_blank"
            >
              Original_Url
            </a>
          </td>
          <td
            className="px-6 py-4 text-sm font-medium
            leading-5 text-right cursor-pointer"
          >
            <a
              className="underline hover:text-gray-700"
              href=""
              target="_blank"
            >
              Shortened_Url
            </a>
          </td>
          <td
            className="px-6 py-4 text-sm font-medium
            leading-5 text-right cursor-pointer"
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
