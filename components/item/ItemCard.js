import React from "react";
import { URL_CONSTANT } from "../../constant/url.constant";

const ItemCard = ({ item, src, handleCardClick }) => {
  const BASE_URL = URL_CONSTANT.BASE_URL;
  return (
    <div onClick={handleCardClick} className=" border shadow-md rounded-lg overflow-hidden cursor-pointer flex flex-col justify-between transition-all ease-in-out duration-300 hover:shadow-sky-200 hover:border-sky-200 w-full" title={item.name}>
      <div className="flex items-center justify-center flex-1 h-40">
        <img src={src ? `${BASE_URL}/${src}` : "/no-image.png"} alt="" className="w-full object-cover" />
      </div>
      <div className="p-2 pb-4 whitespace-nowrap">
        <div className="text-gray-700 font-medium text-sm max-w-[15ch] overflow-hidden overflow-ellipsis">
          {item.name}
        </div>
        <div className="font-bold text-gray-900 text-sm max-w-[15ch] overflow-hidden overflow-ellipsis">
          Rp{Number(item.price).toLocaleString()}
        </div>
      </div>
    </div>
  );
};
export default ItemCard;
