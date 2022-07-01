import React from "react";
import Link from "next/link";
import Search from "../Search";

const HeaderComponent = () => {
  return (
    <header className="bg-sky-500 pt-6 pb-5 shadow-md">
      <dir className="container">
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-1 items-center gap-5">
            <Link href={'/'}>
            <a className="font-work-sans text-3xl text-white font-bold relative mr-10 whitespace-nowrap">
              canteen.
            </a>
            </Link>
            <nav className="w-full">
              <Search />
            </nav>
          </div>
          <div className="flex items-center divide-x-2 divide-white gap-4">
            <div className="flex items-center gap-4">
              <button className="text-white relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <div className="absolute bg-red-600 w-2 h-2 rounded-full top-0 right-0"></div>
              </button>
            </div>
            <div className="flex items-center gap-3 pl-4">
              <Link href={"/signin"}>
                <a className="inline-flex items-center bg-transparent font-bold rounded-full px-4 py-2 text-white ">
                  Sign In
                </a>
              </Link>
              <Link href={"/signup"}>
                <a className="inline-flex items-center bg-white font-bold rounded-lg px-4 py-2 text-sky-500">
                  Sign Up
                </a>
              </Link>
            </div>
          </div>
        </div>
      </dir>
    </header>
  );

  return (
    <header className="border-b-2 bg-sky-500 border-gray-100">
      <dir className="container">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-5">
            <h1 className="font-work-sans text-3xl text-white font-bold relative">
              <span className="relative z-10">HOCAN</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center divide-x-2 divide-white gap-4">
            <div className="flex items-center gap-4">
              <button className="text-white relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <div className="absolute bg-red-600 w-2 h-2 rounded-full top-0 right-0"></div>
              </button>
            </div>
            <div className="flex items-center gap-3 pl-4">
              <div className="text-white flex items-center cursor-pointer">
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
                  Rp 10.000.000
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
              </div>
              <div className="text-sky-500 font-roboto-mono font-bold cursor-pointer">
                <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                  I
                </div>
              </div>
            </div>
          </div>
        </div>
      </dir>
    </header>
  );
};

export default HeaderComponent;
