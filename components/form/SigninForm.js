import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";

const SigninForm = (props) => {
  const [formState, setFormState] = useState({ id: "", password: "" });

  const {signIn} = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault(e);

    const user = await signIn(formState);
    console.log(user)
  };

  const onIDChange = (e) => {
    setFormState({ ...formState, id: e.target.value });
  };

  const onPasswordChange = (e) => {
    setFormState({ ...formState, password: e.target.value });
  };

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center text-sky-500 sm:text-3xl">
          Sign in to your account
        </h1>
        <form
          onSubmit={handleSignIn}
          className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl border"
        >
          <div>
            <label htmlFor="student id" className="text-sm font-medium">
              Student ID
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                id="student id"
                className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm bg-gray-100"
                placeholder="Enter student id"
                onChange={onIDChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <div className="relative mt-1">
              <input
                type="password"
                id="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm bg-gray-100"
                placeholder="Enter password"
                onChange={onPasswordChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="block w-full px-5 py-3 text-sm font-medium text-white bg-sky-500 rounded-lg"
          >
            Sign in
          </button>
          <p className="text-sm text-center text-gray-500">
            <span>No account?</span>{" "}
            <span>
              <Link href="/signup">
                <a className="underline">Sign up</a>
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SigninForm;
