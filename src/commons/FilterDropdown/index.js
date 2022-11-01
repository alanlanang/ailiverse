import React from "react";

const FilterDropdown = (props) => {
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

export default FilterDropdown;
