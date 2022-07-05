import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../services/apiClient";

const ItemBuySection = ({ item, handleClose }) => {
  const { isAuthenticated } = useAuth();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleBuyItemClick = async () => {
    try {
      await api.post("/api/item/buy", {
        id: item.id,
      });
      setSuccess('Item successfully bought!');
      router.reload();
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div className="absolute w-full h-full top-0 z-40">
      <div
        onClick={handleClose}
        className="absolute w-full h-full bg-black bg-opacity-25"
      ></div>
      <div className="absolute bottom-0 md:top-0 md:right-0 w-screen md:w-96 p-5 bg-white rounded-xl shadow-2xl border overflow-y-scroll h-2/3 md:h-full">
        {error && (
          <div className="relative">
            <div className="fixed top-0 left-0 font-medium">
              <div className="bg-red-500 text-white text-lg rounded-lg px-4 py-2 m-2">
                {!isAuthenticated ? (
                  <span>
                    Please <Link href="/account/signin"><a className="underline">sign in</a></Link> to buy item
                  </span>
                ) : (
                  error
                )}
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col md:flex-col space-x-6 justify-center space-y-6 mx-auto">
          <div className="shadow-md rounded-md overflow-hidden">
            <img src={`http://localhost:5000/${item.img_url}`} alt="" className="w-full"/>
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="font-bold text-3xl">{item.name}</h1>
              <h2 className="font-bold text-xl">
                Rp{Number(item.price).toLocaleString()}
              </h2>
            </div>
            <p>{item.description}</p>
            <button
              onClick={handleBuyItemClick}
              className="bg-sky-500 rounded-md px-6 py-2 font-bold text-white"
            >
              Buy Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBuySection;
