import React from "react";

const DownSlimArrow = ({ height, width, transform }) => {
  return (
    <div>
      <svg
        height={height}
        width={width}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform={transform}>
          <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z" />
          <path d="M0-.75h48v48h-48z" fill="none" />
        </g>
      </svg>
    </div>
  );
};

export default DownSlimArrow;
