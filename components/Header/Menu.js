import React, { useState } from "react";
import Link from "next/link";

const Menu = () => {
  const [dropdown, setDropdown] = useState(false);
  const onHoverIn = () => {
    setDropdown(true);
  };

  const onHoverOut = () => {
    setDropdown(false);
  };

  return (
    <div
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      className="block md:hidden relative text-white"
    >
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {dropdown && (
        <div className="absolute right-0 pt-3">
          <div className="bg-white shadow-md rounded-md px-3 py-2 mt-[2px] divide-y text-gray-600 flex flex-col gap-1 whitespace-nowrap">
            <div>
              <Link href={"/account/signin"}>
                <a>Sign In</a>
              </Link>
            </div>
            <div>
              <Link href={"/account/signup"}>
                <a>Sign Up</a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
