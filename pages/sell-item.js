import NextImage from "next/image";
import React, { useRef, useState } from "react";
import Layout from "../components/layout";

const SellItemPage = () => {
  const inputFile = useRef();

  const [imageValid, setImageValid] = useState();
  const [imageSrc, setimageSrc] = useState();

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (img) => {
        const image = new Image();
        image.src = img.target.result;
        setimageSrc(image.src);
        image.onload = () => {
          const width = image.width;
          const height = image.height;
          if (width != height) {
            alert("Image must 1 : 1");
            return;
          } else {
            alert("Valid");
            return;
          }
        };
      };
    }
  };
  return (
    <Layout>
      <div className="container mt-4">
        <div className="max-w-4xl mx-auto border p-4 rounded-lg shadow-md space-y-4">
          <div className="flex gap-4 items-start">
            <div className="flex gap-4 flex-col">
              <label htmlFor="item_image" hidden>Image</label>
              <input
                type={"file"}
                className="block w-full text-sm text-slate-500 file:mr-2 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-500 hover:file:bg-violet-100"
                accept="image/*"
                id="item_image"
                name="file"
                ref={inputFile}
                onChange={onFileChange}
              />
              <div>
                {imageSrc && (
                  <div className="relative block w-48 mx-auto aspect-square">
                    <NextImage
                      src={imageSrc}
                      layout={"fill"}
                      objectFit="cover"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1 flex flex-col space-y-4">
              <div>
                <label
                  htmlFor="item_name"
                  className="text-sm font-medium text-gray-600"
                >
                  Item Name
                </label>
                <input
                  type="text"
                  className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm bg-gray-100 focus:outline-sky-500 block"
                  placeholder="Enter item name"
                  id="item_name"
                />
              </div>
              <div>
                <label
                  htmlFor="item_description"
                  className="text-sm font-medium text-gray-600"
                >
                  Decription
                </label>
                <input
                  type="text"
                  className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm bg-gray-100 focus:outline-sky-500 block"
                  placeholder="Enter item description"
                  id="item_description"
                />
              </div>
              <div>
                <label
                  htmlFor="item_price"
                  className="text-sm font-medium text-gray-600"
                >
                  Price
                </label>
                <input
                  type="text"
                  className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm bg-gray-100 focus:outline-sky-500 block"
                  placeholder="Enter item price"
                  id="item_price"
                />
              </div>
            </div>
          </div>
          <div className="space-x-2 flex justify-end">
            <button className="inline-flex bg-red-500 text-white rounded-lg px-6 py-2 font-bold">
              Cancel
            </button>
            <button className="inline-flex bg-sky-500 text-white rounded-lg px-6 py-2 font-bold">
              Sell
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SellItemPage;
