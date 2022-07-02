import React, { useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";

import {
  InvalidAccount,
  InvalidID,
  InvalidIDEmpty,
  InvalidIDLength,
  InvalidPasswordEmpty,
  InvalidPasswordLength,
} from "./ValidationAlert";
import idValidation from "../../utils/idValidation";

const SigninForm = (props) => {
  const [formState, setFormState] = useState({ id: "", password: "" });
  const inputPassword = useRef();
  const inputID = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [validation, setValidation] = useState({
    id: true,
    id_empty: true,
    id_length: true,
    password_empty: true,
    password_length: true,
  });
  const [error, setError] = useState("");

  const { signIn } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault(e);
    setIsLoading(true);
    const { id, id_empty, id_length, password_empty, password_length } =
      validation;
    if (formState.id.length === 0 && formState.password.length === 0) {
      setValidation({
        id: true,
        id_empty: false,
        password_empty: false,
        id_length: true,
        password_length: true,
      });
    } else if (
      id &&
      id_empty &&
      id_length &&
      password_empty &&
      password_length
    ) {
      const result = await signIn(formState);
      if (result?.response?.status > 300) {
        setError(result.response.data.message);
      } else if (result?.code === "ERR_NETWORK") {
        setError(result.message);
      }
    }
    setIsLoading(false);
    if (!id || !id_empty || !id_length) {
      inputID.current.focus();
    } else if (!password_empty || !password_length) {
      inputID.current.focus();
    }
  };

  const onIDChange = (e) => {
    setFormState({ ...formState, id: e.target.value });
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

  const onPasswordChange = (e) => {
    setFormState({ ...formState, password: e.target.value });
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

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h1 className="font-bold text-center text-sky-500 text-3xl">
          Sign in to your account
        </h1>
        <form
          onSubmit={handleSignIn}
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
                onChange={onIDChange}
                ref={inputID}
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
                onChange={onPasswordChange}
                ref={inputID}
              />
            </div>
            <div className="mt-2">
              {!validation.password_empty && <InvalidPasswordEmpty />}
              {!validation.password_length && <InvalidPasswordLength />}
            </div>
          </div>
          <button
            type="submit"
            className="block w-full px-5 py-3 text-sm font-medium text-white bg-sky-500 rounded-lg"
          >
            {isLoading ? "Loading..." : "Sign in"}
          </button>
          <InvalidAccount message={error} />
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
