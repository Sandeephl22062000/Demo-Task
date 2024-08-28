import React from "react";

const DownArrow = ({ height, width, transform }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        style={{ transform }}
      >
        <path d="M21 12l-18 12v-24z" fill="#6b7280" />
      </svg>
    </div>
  );
};

export default DownArrow;
