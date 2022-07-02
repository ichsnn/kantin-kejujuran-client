import React from "react";
import Layout from "../../components/layout";
import Signin from "../../components/form/SigninForm";
import SSRAuth from "../../utils/SSRAuth";

export const getServerSideProps = SSRAuth;

const SignInPage = () => {
  return (
    <Layout>
      <Signin></Signin>
    </Layout>
  );
};

export default SignInPage;
