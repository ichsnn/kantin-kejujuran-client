import React from "react";

const DepositForm = () => {
  return (
    <div className="container pt-20">
      <h1 className="text-center text-sky-500 font-bold text-4xl mb-6">Deposit balance</h1>
      <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 mx-auto">
        <form >
          <div className="flex flex-col p-1 overflow-hidden border rounded-lg lg:flex-row  focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300 shadow-lg">
            <input
              className="px-6 py-2 text-sky-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent dark:focus:placeholder-transparent"
              type="number"
              placeholder="Enter amount"
              min={0}
            />
            <button className="px-4 py-3 text-sm font-bold tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-sky-500 rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Deposit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepositForm;
