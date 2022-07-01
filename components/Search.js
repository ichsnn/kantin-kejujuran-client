import React from "react";

const SearchComponents = () => {
  return (
    <form className="hidden md:flex md:flex-1 items-center">
      <div className="relative w-full">
        <input
          className="h-10 pl-4 pr-10 text-md placeholder-gray-400 border-gray-300 rounded-lg focus:z-10 w-full border focus:outline-sky-500"
          placeholder="Search item..."
          type="text"
        />
        <button
          className="absolute inset-y-0 right-0 pr-2 mr-px text-gray-400 rounded-r-lg"
          type="submit"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchComponents;
