import React from "react";

const Button = (props) => {
  const { text, type, onClick } = props;
  return (
    <div
      className={` capitalize rounded-sm py-1 px-2 text-sm outline-none w-24 text-gray-100 font-normal cursor-pointer flex items-center justify-center ${
        type === "primary" && "bg-darkCyanAV"
      }`}
      onClick={onClick}
      aria-hidden="true"
    >
      {text}
    </div>
  );
};

export default Button;
