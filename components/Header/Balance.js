import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import DepositForm from "../form/DepositForm";

const Balance = ({ value }) => {
  const { user } = useAuth();

  const [dropdown, setDropdown] = useState(false);

  const onHoverIn = () => {
    setDropdown(true);
  };

  const onHoverOut = () => {
    setDropdown(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      <button className="text-white flex items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path
            fillRule="evenodd"
            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
            clipRule="evenodd"
          />
        </svg>
        <div className="font-work-sans font-semibold max-w-[15ch] overflow-hidden text-ellipsis whitespace-nowrap">
          Rp{user.balance ? Number(user.balance).toLocaleString() : "0"}
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>
      <div className={dropdown ? "block" : "hidden"}>
        <div className="absolute right-0 pt-3">
          <div className="divide-y text-gray-600 flex flex-col gap-1 whitespace-nowrap bg-white shadow-md rounded-md px-3 py-2">
            <Link href={'/account/deposit'}>
            <a className="text-start">Add Balance</a>
            </Link>
            <Link href={'/account/withdraw'}>
            <a className="text-start">Withdraw Balance</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
