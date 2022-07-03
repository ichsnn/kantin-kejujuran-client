import React from "react";
import itemImage from "../../public/bear-brand.webp";
import Image from "next/image";

// create product card component for item card with image, name, price, and description (if available) and link to product page (if available) use tailwindcss to style the component
const ItemCard = ({ item, src }) => {
  return (
    <div className="border shadow-md w-fit rounded-lg overflow-hidden relative cursor-pointer flex flex-col justify-between transition-all ease-in-out duration-300 hover:shadow-sky-200 hover:border-sky-200" title="Crayon Shincan">
      <div className="flex items-center justify-center flex-1 h-40">
        <Image src={src ? src : itemImage} objectFit={"cover"} />
      </div>
      <div className="p-2 pb-4 whitespace-nowrap">
        <div className="text-gray-700 font-medium text-sm max-w-[15ch] overflow-hidden overflow-ellipsis">
          Crayon Shincan tahun
        </div>
        <div className="font-bold text-gray-900 text-sm max-w-[15ch] overflow-hidden overflow-ellipsis">
          Rp10.000
        </div>
      </div>
    </div>
  );
};
export default ItemCard;
