import React from "react";
import Button from "../Button";
import FilterDropdown from "../FilterDropdown";
import Search from "../Search";
import { DropdownLists } from "../../utils";

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
      {DropdownLists.map((dropdown) => (
        <FilterDropdown
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
