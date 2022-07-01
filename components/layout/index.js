import React from "react";
import Head from "next/head";
import Header from "../Header";

const index = (props) => {
  const { isSignedIn, user } = props;
  const { children } = props;
  return (
    <div>
      <Header isSignedIn={isSignedIn} user={user} />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default index;
