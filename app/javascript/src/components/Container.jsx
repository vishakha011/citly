import React from "react";
import NavBar from "components/NavBar";

import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="my-4 flex-auto w-4/6 p-4 mx-auto">{children}</div>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
