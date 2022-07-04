import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Balance from "./Balance";
import Profile from "./Profile";
import ButtonLink from "./ButtonLink";
import Menu from "./Menu";
import { useAuth } from "../../context/AuthContext";

const HeaderComponent = () => {
  const {isAuthenticated} = useAuth();

  if (isAuthenticated) {
    return (
      <header className="border-b-2 pt-6 pb-5 bg-sky-500 z-10">
        <dir className="container">
          <div className="flex justify-between items-center gap-4">
            <div className="flex flex-1 items-center gap-5">
              <Link href={"/"}>
                <a>
                  <Logo />
                </a>
              </Link>
            </div>
            <div className="hidden md:flex items-center divide-x-2 divide-white gap-4">
              <div className="flex items-center gap-3 pl-4">
                <Balance />
                <Profile />
              </div>
            </div>
            <div className="flex md:hidden items-center gap-4">
              <Balance />
              <Profile/>
            </div>
          </div>
        </dir>
      </header>
    );
  }

  return (
    <header className="bg-sky-500 pt-6 pb-5 shadow-md">
      <div className="container">
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-1 items-center gap-5">
            <Link href={"/"}>
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <div className="hidden md:flex items-center divide-x-2 divide-white gap-4">
            <div className="flex items-center gap-3 pl-4">
              <ButtonLink
                to="/account/signin"
                name="Sign In"
                customColor={"text-white"}
              />
              <ButtonLink
                to="/account/signup"
                name="Sign Up"
                customColor={"text-sky-500 bg-white"}
              />
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </header>
  );
};
export default HeaderComponent;
