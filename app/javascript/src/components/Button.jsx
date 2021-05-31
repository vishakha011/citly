import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "button", buttonText, onClick, loading }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-purple-500 ml-2 w-32 py-2 px-4 shadow rounded text-white text-sm font-bold focus:shadow-outline focus:outline-none  hover:bg-purple-400"
    >
      {loading ? "Loading..." : buttonText}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  buttonText: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};
export default Button;
