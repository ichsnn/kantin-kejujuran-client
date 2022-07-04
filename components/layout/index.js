import React from "react";
import Head from "next/head";
import HeaderNav from "../Header";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="layout">
        <HeaderNav/>
        <main>{children}</main>
        <footer className="container p-4 text-gray-900 font-semibold text-center">Created by ichsnn</footer>
    </div>
  );
};

export default Layout;
