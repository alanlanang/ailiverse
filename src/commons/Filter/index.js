import React from "react";
import Search from "../Search";

const dropdownLists = [
  { name: "type", placeholder: "Type", lists: ["Type 1", "Type 2", "Type 3"] },
  {
    name: "model",
    placeholder: "Model",
    lists: ["Model 1", "Model 2", "Model 3"],
  },
  { name: "sort", placeholder: "Sort", lists: ["Type", "Model"] },
];

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

const Dropdown = (props) => {
  const { name, placeholder, lists } = props;
  return (
    <div className="rounded-sm py-1 px-2 text-sm bg-grenMSU40 flex items-center border-[1px] border-gray-200 outline-none w-24 text-gray-800 font-normal">
      <select
        name={name}
        id={name}
        className="border-none outline-none bg-transparent w-full"
      >
        <option value="" selected disabled hidden>
          {placeholder}
        </option>
        {lists.map((list) => (
          <option key={list} value={list} className="bg-gray-100 text-gray-600">
            {list}
          </option>
        ))}
      </select>
    </div>
  );
};

const Filter = () => {
  return (
    <div className="my-6 flex gap-4">
      <div className="py-2 border-2 border-accent w-80">
        <Search
          className="search"
          delay={300}
          iconPosition="left"
          iconColor="#4a4a4a"
          placeholder="Search..."
          onSearchDelay={() => {}}
        />
      </div>
      {dropdownLists &&
        dropdownLists.map((dropdown) => (
          <Dropdown
            key={dropdown.name}
            name={dropdown.name}
            placeholder={dropdown.placeholder}
            lists={dropdown.lists}
          />
        ))}
      <Button text="create new" type="primary" onClick={() => {}} />
    </div>
  );
};

export default Filter;
