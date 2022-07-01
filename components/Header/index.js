import React from "react";
import Link from "next/link";
import Search from "./Search";
import Logo from "./Logo";
import Balance from "./Balance";
import Cart from "./Cart";
import Profile from "./Profile";
import ButtonLink from "./ButtonLink";

const HeaderComponent = (props) => {
  const { isSignedIn, user } = props;

  if (isSignedIn) {
    return (
      <header className="border-b-2 pt-6 pb-5 bg-sky-500">
        <dir className="container">
          <div className="flex justify-between items-center gap-4">
            <div className="flex flex-1 items-center gap-5">
              <Link href={"/"}>
                <a>
                  <Logo />
                </a>
              </Link>
              <nav className="w-full">
                <Search />
              </nav>
            </div>
            <div className="flex items-center divide-x-2 divide-white gap-4">
              <div className="flex items-center gap-4">
                <Cart />
              </div>
              <div className="flex items-center gap-3 pl-4">
                <Balance value={user.balance} />
                <Profile user={user} />
              </div>
            </div>
          </div>
        </dir>
      </header>
    );
  }
  
  return (
    <header className="bg-sky-500 pt-6 pb-5 shadow-md">
      <dir className="container">
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-1 items-center gap-5">
            <Link href={"/"}>
              <a>
                <Logo />
              </a>
            </Link>
            <nav className="w-full">
              <Search />
            </nav>
          </div>
          <div className="flex items-center divide-x-2 divide-white gap-4">
            <div className="flex items-center gap-4">
              <Cart />
            </div>
            <div className="flex items-center gap-3 pl-4">
              <ButtonLink to="/signin" name="Sign In" customColor={"text-white"}/>
              <ButtonLink to="/signup" name="Sign Up" customColor={"text-sky-600 bg-white"}/>
            </div>
          </div>
        </div>
      </dir>
    </header>
  );
};
export default HeaderComponent;
