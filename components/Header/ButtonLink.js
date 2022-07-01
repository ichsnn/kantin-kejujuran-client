import React from "react";
import Link from "next/link";

const ButtonLink = ({ to, name, customColor }) => {
  return (
    <Link href={to}>
      <a className={`inline-flex items-center font-bold rounded-lg px-4 py-2 ${customColor}`}>
        {name}
      </a>
    </Link>
  );
};

export default ButtonLink;
