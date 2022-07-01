import React from "react";
import Layout from "../../components/layout";
import Signin from "../../components/form/SigninForm";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import { getCookies } from "../../utils/cookie";

export const getServerSideProps = async (context) => {
  const cookies = getCookies(context);
  if (cookies.token)
    return {
      redirect: {
        destination: "/",
      },
    };
  return {
    props: {},
  }
};

const index = () => {
  return (
    <Layout>
      <Signin></Signin>
    </Layout>
  );
};

export default index;
