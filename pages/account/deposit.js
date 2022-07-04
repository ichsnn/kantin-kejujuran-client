import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import DepositForm from "../../components/form/DepositForm";
import Layout from "../../components/layout";
import { useAuth } from "../../context/AuthContext";

const DepositPage = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  return (
    <Layout>
      {isAuthenticated ? (
        <DepositForm />
      ) : (
        <p className="text-gray-700 font-bold text-center text-2xl mt-10">
          You must be{" "}
          <Link href={"/account/signin"}>
            <a className="underline">signed in</a>
          </Link>{" "}
          to deposit balance.
        </p>
      )}
    </Layout>
  );
};

export default DepositPage;
