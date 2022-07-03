import React, { useEffect, useState } from "react";
import Link from "next/link";
import Search from "./Search";
import Logo from "./Logo";
import Balance from "./Balance";
import Profile from "./Profile";
import ButtonLink from "./ButtonLink";
import SellItemForm from "../item/selItem";
import Menu from "./Menu";

const HeaderComponent = (props) => {
  const { isSignedIn, user } = props;
  const [isSell, setIsSell] = useState(false);

  const onSellItemClick = () => {
    setIsSell(true);
  };

  const onCancelSellItemClick = () => {
    setIsSell(false);
  };

  useEffect(() => {
    console.log(isSell);
  });

  if (isSignedIn) {
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
                <Balance value={user.balance} />
                <Profile user={user} />
              </div>
            </div>
            <div className="flex md:hidden items-center gap-4">
              <Balance value={user.balance} />
              <Profile value={user} />
            </div>
          </div>
        </dir>
        {isSell && (
          <SellItemForm onCancelSellItemClick={onCancelSellItemClick} />
        )}
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
      {isSell && <SellItemForm onCancelSellItemClick={onCancelSellItemClick} />}
    </header>
  );
};
export default HeaderComponent;
