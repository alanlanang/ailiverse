import React from "react";
import "./style.scss";

const PhotoCard = (props) => {
  const { name } = props;

  const getUserInitial = (name) => {
    return name
      .replace(/(^\w{1})|(\s+\w{1})/g, (char) => char.toUpperCase())
      .split(" ")
      .map((letter) => letter[0])
      .join("")
      .slice(0, 2);
  };

  return (
    <div
      className="photo"
      style={{
        backgroundColor:
          "#" + Math.floor(Math.random() * 16777215).toString(16),
      }}
    >
      <p>{getUserInitial(name)}</p>
    </div>
  );
};

export default PhotoCard;
