import Link from "next/link";
import React, { useEffect } from "react";
import WithdrawForm from "../../components/form/WithdrawForm";
import Layout from "../../components/layout";
import { useAuth } from "../../context/AuthContext";

const WithdrawPage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Layout>
      {isAuthenticated ? (
        <WithdrawForm/>
      ) : (
        <p className="text-gray-700 font-bold text-center text-2xl mt-10">
          You must be{" "}
          <Link href={"/account/signin"}>
            <a className="underline">signed in</a>
          </Link>{" "}
          to withdraw your balance.
        </p>
      )}
    </Layout>
  );
};

export default WithdrawPage;
