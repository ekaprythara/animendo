"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Searchbar = () => {
  const router = useRouter();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputValue = inputRef.current.value;
    if (inputValue.length > 2) {
      router.push(`/search/${inputValue}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="relative">
        <span className="absolute top-0 left-3">
          <FaMagnifyingGlass color={"#444"} size={18} />
        </span>
        <input
          className="p-2 rounded-lg border border-white ps-10 text-black"
          type="search"
          placeholder="Search Anime"
          ref={inputRef}
        />
      </label>
    </form>
  );
};

export default Searchbar;
