import React, { useState } from "react";
import Link from "next/link";
import Search from "./Search";
import Logo from "./Logo";
import Balance from "./Balance";
import Profile from "./Profile";
import ButtonLink from "./ButtonLink";
import SellItemForm from "../item/selItem";

const HeaderComponent = (props) => {
  const { isSignedIn, user } = props;
  const [isSell, setIsSell] = useState(false);

  const onSellItemClick = () => {
    setIsSell(true);
  };

  const onCancelSellItemClick = () => {
    setIsSell(false);
  };

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
                <Link href={"/sell-item"}>
                  <a className="flex bg-sky-600 text-white font-bold px-6 py-2 rounded-lg">
                    Sell Item
                  </a>
                </Link>
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
      <div className="container">
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-1 items-center gap-5">
            <Link href={"/"}>
              <a>
                <Logo />
              </a>
            </Link>
            <nav className="w-full flex gap-4">
              <Search />
            </nav>
          </div>
          <div className="flex items-center divide-x-2 divide-white gap-4">
            <div className="flex items-center gap-4">
              {/* <Link href={'/sell-item'}>
                <a className="flex bg-sky-600 text-white font-bold px-6 py-2 rounded-lg">
                  Sell Item
                </a>
              </Link> */}
              <button
                onClick={onSellItemClick}
                className="flex bg-sky-600 text-white font-bold px-6 py-2 rounded-lg"
              >
                Sell Item
              </button>
            </div>
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
        </div>
      </div>
      {isSell && <SellItemForm onCancelSellItemClick={onCancelSellItemClick} />}
    </header>
  );
};
export default HeaderComponent;
