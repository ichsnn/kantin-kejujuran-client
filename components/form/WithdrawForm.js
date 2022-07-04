import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { api } from "../../services/apiClient";
import { InvalidAlert } from "./ValidationAlert";

const WithdrawForm = () => {
  const [amount, setAmount] = useState(0);
  const [isAmountValid, setIsAmountValid] = useState(false);
  const [error, setError] = useState(null);
  const inputAmount = useRef();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isAmountValid) {
      try {
        await api.post("/api/user/balance/withdraw", {
          amount: amount,
        });
      } catch (error) {
        setError("Not enough balance");
        return;
      }
      router.reload();
    } else {
      if (inputAmount.current.value.length === 0) {
        setError("Please enter an amount");
      }
    }
  };

  const onAmoutChange = (e) => {
    const amountValue = parseInt(e.target.value);
    setAmount(amountValue);

    if (e.target.value.length > 0) {
      if (amountValue < 5000) {
        setIsAmountValid(false);
        setError("Min amount to withdraw is Rp5,000");
      } else if (amountValue > 1000000) {
        setIsAmountValid(false);
        setError("Max amount to withdraw is Rp1,000,000");
      } else {
        setIsAmountValid(true);
        setError(null);
      }
    } else {
      setIsAmountValid(false)
    }
  };

  return (
    <div className="container pt-20">
      <h1 className="text-center text-sky-500 font-bold text-4xl mb-6">
        Withdraw balance
      </h1>
      <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 mx-auto">
        <form onSubmit={handleSubmit} className="w-full md:w-auto">
          <div className="flex flex-col p-1 overflow-hidden border rounded-lg lg:flex-row  focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300 shadow-lg max-w-lg mx-auto">
            <input
              className="px-6 py-2 text-sky-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent dark:focus:placeholder-transparent"
              type="number"
              placeholder="Enter amount"
              onChange={onAmoutChange}
              ref={inputAmount}
            />
            <button className="px-4 py-3 text-sm font-bold tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-sky-500 rounded-lg">
              Withdraw
            </button>
          </div>
          {error && (
            <div>
              <InvalidAlert message={error} />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default WithdrawForm;
