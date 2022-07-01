import React from "react";
import Head from "next/head";
import Header from "../Header";

const index = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default index;
