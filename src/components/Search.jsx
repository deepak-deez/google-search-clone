import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { NavLink } from "react-router-dom";
import { useResultContext } from "../contexts/ResultContextProvider";

const Search = () => {
  const [text, setText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  // useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);
  return (
    <div className="flex space-y-2 flex-col items-center ">
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border-2 border-black "
        />
        <button
          onClick={() => {
            setText("");
          }}
        >
          Search
        </button>
      </div>
      <div className="space-x-5 justify-between flex ">
        <NavLink to="/search" className={" active:bg-red-300"}>
          All
        </NavLink>
        <NavLink to="/News">News</NavLink>
        <NavLink to="/videos">Videos</NavLink>
        <NavLink to="/images">Images</NavLink>
      </div>
    </div>
  );
};

export default Search;
