import React, { useState } from "react";
import Link from "next/link";
import { cleanCookies } from "../../utils/cookie";
import { Router, useRouter } from "next/router";

const Profile = ({ user }) => {
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();

  const onHoverIn = () => {
    setDropdown(true);
  };

  const onHoverOut = () => {
    setDropdown(false);
  };

  const handleLogout = () => {
    cleanCookies();
    router.push("/");
  };

  return (
    <div
      className="relative"
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      <div className="text-sky-500 font-roboto-mono font-bold cursor-pointer">
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
          {String(user.name)[0].toUpperCase()}
        </div>
      </div>
      <div className={dropdown ? "block" : "hidden"}>
        <div className="absolute right-0 pt-3">
          <div className="bg-white shadow-md rounded-md px-3 py-2 mt-[2px] divide-y text-gray-600 flex flex-col gap-1 whitespace-nowrap">
            <div>
              <Link href={"/user/profile"}>
                <a>Profile</a>
              </Link>
            </div>
            <div>
              <button onClick={handleLogout} className="text-start">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
