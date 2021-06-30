import React from "react";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({ data, handleClick, handlePinned }) => {
  return (
    <table
      className="min-w-full overflow-hidden
      divide-y divide-gray-200 mt-10 shadow rounded-lg table-auto"
    >
      <TableHeader />
      <TableRow
        data={data}
        handleClick={handleClick}
        handlePinned={handlePinned}
      />
    </table>
  );
};

export default Table;
