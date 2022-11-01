import React from "react";
import _ from "lodash";
import { IoSearch } from "react-icons/io5";

import "./style.scss";

const Search = (props) => {
  const {
    onSearchDelay = () => {},
    delay = 1000,
    iconPosition = "right",
    placeholder = "Search...",
    iconColor = "#4a5568",
  } = props;

  const setValue = _.debounce((text) => {
    onSearchDelay(text);
  }, delay);

  return (
    <div
      className={`search-section ${
        iconPosition === "right" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
        className="rounded bg-transparent focus:outline-none text-sm w-full"
        placeholder={placeholder}
      />
      <IoSearch
        className={`w-5 h-5 ${iconPosition === "right" ? "ml-2" : "mr-2"}`}
        color={iconColor}
      />
    </div>
  );
};

export default Search;
