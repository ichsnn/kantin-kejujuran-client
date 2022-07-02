import React from "react";
import SSRAuth from "../../utils/SSRAuth";
import SignupForm from "../../components/form/SignupForm";

export const getServerSideProps = SSRAuth;

const SignUpPage = () => {
  return <SignupForm />;
};

export default SignUpPage;
