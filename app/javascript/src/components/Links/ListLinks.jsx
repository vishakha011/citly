import React from "react";
import Table from "../Links/Table";

const ListLinks = ({ data, handleClick, handlePinned }) => {
  return (
    <Table data={data} handleClick={handleClick} handlePinned={handlePinned} />
  );
};

export default ListLinks;
