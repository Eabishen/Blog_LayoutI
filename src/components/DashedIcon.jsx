import React from "react";

const DashedIcon = ({ color }) => {
  return (
    <span className="dashedIcon">
      <svg
        width="20"
        height="2"
        viewBox="0 0 20 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.5" width="20" height="1" fill={color} />
      </svg>
    </span>
  );
};

export default DashedIcon;
