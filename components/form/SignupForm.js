import React, { useRef, useState } from "react";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import idValidation from "../../utils/idValidation";

import {
  InvalidError,
  InvalidID,
  InvalidIDEmpty,
  InvalidIDLength,
  InvalidPasswordEmpty,
  InvalidPasswordLength,
  InvalidNameEmpty,
  InvalidPasswordNotMatch,
} from "./ValidationAlert";

const SignupForm = () => {
  const [newUser, setNewUser] = useState({ id: "", name: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");

  const [validation, setValidation] = useState({
    id: true,
    id_empty: true,
    id_length: true,
    name_empty: true,
    password_empty: true,
    password_length: true,
    password_match: true,
  });

  const inputID = useRef();
  const inputName = useRef();
  const inputPassword = useRef();
  const inputConfirmPassword = useRef();

  const { signUp } = useAuth();

  const handleSignin = async (e) => {
    e.preventDefault();
    const {
      id,
      id_empty,
      id_length,
      password_empty,
      password_length,
      name_empty,
      password_match,
    } = validation;
    if (
      newUser.id.length === 0 &&
      newUser.password.length === 0 &&
      newUser.password.length === 0 &&
      inputConfirmPassword.current.value.length === 0
    ) {
      setValidation({
        id: true,
        id_empty: false,
        password_empty: false,
        name_empty: false,
        id_length: true,
        password_length: true,
        password_match: false,
      });
      inputID.current.focus();
    } else if (
      id &&
      id_empty &&
      id_length &&
      password_empty &&
      password_length &&
      name_empty &&
      password_match
    ) {
      e.preventDefault();
      setIsLoading(true);
      const result = await signUp(newUser);
      if (result?.response?.status >= 400) {
        setError(result.response.data.message);
      }
      setIsSignUp(true);
    }
    if (!id || !id_empty || !id_length) {
      inputID.current.focus();
    } else if (!name_empty) {
      inputName.current.focus();
    } else if (!password_empty || !password_length) {
      inputPassword.current.focus();
    } else if (!password_match) {
      inputConfirmPassword.current.focus();
    }
    setIsLoading(false);
  };

  const onIDChange = (e) => {
    setNewUser({ ...newUser, id: e.target.value });
    if (e.target.value.length === 0) {
      setValidation({
        ...validation,
        id_empty: false,
        id_length: true,
        id: true,
      });
    } else if (e.target.value.length > 0) {
      if (e.target.value.length === 5) {
        if (idValidation(e.target.value)) {
          setValidation({
            ...validation,
            id_empty: true,
            id_length: true,
            id: true,
          });
        } else {
          setValidation({
            ...validation,
            id_empty: true,
            id_length: true,
            id: false,
          });
        }
      } else {
        setValidation({
          ...validation,
          id_empty: true,
          id_length: false,
          id: true,
        });
      }
    }
  };

  const onNameChange = (e) => {
    setNewUser({ ...newUser, name: e.target.value });
    if (e.target.value.length === 0) {
      setValidation({
        ...validation,
        name_empty: false,
      });
    } else {
      setValidation({
        ...validation,
        name_empty: true,
      });
    }
  };

  const onPasswordChange = (e) => {
    setNewUser({ ...newUser, password: e.target.value });
    if (e.target.value.length === 0) {
      setValidation({
        ...validation,
        password_empty: false,
        password_length: true,
      });
    } else if (e.target.value.length > 0) {
      if (e.target.value.length >= 8) {
        setValidation({
          ...validation,
          password_empty: true,
          password_length: true,
        });
      } else {
        setValidation({
          ...validation,
          password_empty: true,
          password_length: false,
        });
      }
    }
  };

  const onConfirmPasswordChange = (e) => {
    if (inputPassword.current.value === e.target.value) {
      setValidation({
        ...validation,
        password_match: true,
      });
    } else {
      setValidation({
        ...validation,
        password_match: false,
      });
    }
  };

  if (!isSignUp)
    return (
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 relative">
        <div className="max-w-lg mx-auto">
          <h1 className="text-sky-500 text-5xl font-bold font-work-sans text-center">
            <Link href={"/"}>
              <a>canteen.</a>
            </Link>
          </h1>
          <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
            Sign up to sell and buy items with other students on canteen.
          </p>
          <form
            onSubmit={handleSignin}
            className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl border"
          >
            <div>
              <label
                htmlFor="student_id"
                className="text-sm font-medium text-gray-600"
              >
                Student ID
              </label>
              <div className="relative mt-1">
                <input
                  type="text"
                  id="student_id"
                  className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm bg-gray-100 focus:outline-sky-500"
                  placeholder="Enter student id"
                  autoComplete="off"
                  ref={inputID}
                  onChange={onIDChange}
                />
              </div>
              <div className="mt-2">
                {!validation.id && <InvalidID />}
                {!validation.id_empty && <InvalidIDEmpty />}
                {!validation.id_length && <InvalidIDLength />}
              </div>
            </div>
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <div className="relative mt-1">
                <input
                  type="text"
                  id="name"
                  className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm bg-gray-100 focus:outline-sky-500"
                  placeholder="Enter name"
                  autoComplete="off"
                  ref={inputName}
                  onChange={onNameChange}
                />
              </div>
              {!validation.name_empty && <InvalidNameEmpty />}
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type="password"
                  id="password"
                  className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm bg-gray-100 focus:outline-sky-500"
                  placeholder="Enter password"
                  ref={inputPassword}
                  onChange={onPasswordChange}
                />
              </div>
              <div className="mt-2">
                {!validation.password_empty && <InvalidPasswordEmpty />}
                {!validation.password_length && <InvalidPasswordLength />}
              </div>
            </div>
            <div>
              <label
                htmlFor="confirm_password"
                className="text-sm font-medium text-gray-600"
              >
                Confirm Password
              </label>
              <div className="relative mt-1">
                <input
                  type="password"
                  id="confirm_password"
                  className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm bg-gray-100 focus:outline-sky-500"
                  placeholder="Enter confirm password"
                  onChange={onConfirmPasswordChange}
                  ref={inputConfirmPassword}
                />
              </div>
              <div className="mt-2">
                {!validation.password_match && <InvalidPasswordNotMatch />}
              </div>
            </div>
            <button
              type="submit"
              className="block w-full px-5 py-3 text-sm font-medium text-white bg-sky-500 rounded-lg"
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
            <InvalidError message={error} />
            <p className="text-sm text-center text-gray-500">
              <span>Have account?</span>{" "}
              <span>
                <Link href="/account/signin">
                  <a className="underline">Sign in</a>
                </Link>
              </span>
            </p>
          </form>
        </div>
        {isSignUp && <SignUpSuccess />}
      </div>
    );
  return <SignUpSuccess />;
};
export default SignupForm;

const SignUpSuccess = () => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <div className="flex flex-col items-center justify-center p-8">
        <div className="flex items-center text-green-500">
          <svg
            className="h-12 w-12"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p className="ml-4 text-center text-gray-500">
            <span>Sign up success!</span>
          </p>
        </div>
        <p className="text-center text-gray-500">
          <span>You can now sign in with your student ID and password.</span>
        </p>
        <div className="flex justify-center mt-4">
          <Link href="/account/signin">
            <a className="text-sky-500 text-sm font-medium">Sign in</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
