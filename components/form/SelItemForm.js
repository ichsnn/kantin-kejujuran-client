import NextImage from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { api } from "../../services/apiClient";
import {
  InvalidImage,
  InvalidNameEmpty,
  InvalidDescriptionEmpty,
  InvalidPriceEmpty,
} from "./ValidationAlert";

const SellItemForm = ({ onCancelSellItemClick }) => {
  const inputFile = useRef();
  const inputName = useRef();
  const inputDescription = useRef();
  const inputPrice = useRef();

  const router = useRouter();

  const [imageSrc, setimageSrc] = useState();

  const [formValidation, setFormValidation] = useState({
    name: true,
    price: true,
    description: true,
    image_valid: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formValidation.name ||
      !formValidation.price ||
      !formValidation.description ||
      !formValidation.image_valid
    ) {
      return;
    }
    const formData = new FormData();
    formData.append("image", inputFile.current.files[0]);
    formData.append("name", inputName.current.value);
    formData.append("description", inputDescription.current.value);
    formData.append("price", inputPrice.current.value);
    await api.post("/api/item/sell", formData);
    router.reload()
  };

  const handleFileInput = (e) => {
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
            setFormValidation({ ...formValidation, image_valid: false });
            return;
          } else {
            setFormValidation({ ...formValidation, image_valid: true });
            return;
          }
        };
      };
    }
  };

  const handleNameInput = (e) => {
    const name = e.target.value;
    if (name.length > 0) {
      setFormValidation({ ...formValidation, name: true });
    } else {
      setFormValidation({ ...formValidation, name: false });
    }
  };

  const handleDescriptionInput = (e) => {
    const description = e.target.value;
    if (description.length > 0) {
      setFormValidation({ ...formValidation, description: true });
    } else {
      setFormValidation({ ...formValidation, description: false });
    }
  };

  const handlePriceInput = (e) => {
    const price = e.target.value;
    if (price.length > 0) {
      setFormValidation({ ...formValidation, price: true });
    } else {
      setFormValidation({ ...formValidation, price: false });
    }
  };

  return (
    <div className="absolute z-50 top-0 bg-black bg-opacity-10 h-full w-full left-1/2 -translate-x-1/2 p-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl border mx-auto relative top-20 p-4 rounded-lg shadow-md space-y-4 bg-white"
      >
        <div className="flex gap-4 items-start flex-col md:flex-row">
          <div className="flex gap-4 flex-col w-full md:w-auto">
            <label htmlFor="item_image" hidden>
              Image
            </label>
            <input
              type={"file"}
              className="block w-full text-sm text-slate-500 file:mr-2 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-500 hover:file:bg-violet-100"
              accept="image/*"
              id="item_image"
              name="file"
              ref={inputFile}
              onChange={handleFileInput}
              required
            />
            <div className="mt-2">              
              {!formValidation.image_valid && <InvalidImage />}
            </div>
            <div>
              {imageSrc && (
                <div className="relative block w-48 mx-auto aspect-square">
                  <NextImage src={imageSrc} layout={"fill"} objectFit="cover" />
                </div>
              )}
            </div>
          </div>
          <div className="flex-1 flex flex-col space-y-4 w-full md:w-auto">
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
                onChange={handleNameInput}
                ref={inputName}
                required
              />
              <div className="mt-2">
                {!formValidation.name && <InvalidNameEmpty />}
              </div>
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
                onChange={handleDescriptionInput}
                ref={inputDescription}
                required
              />
              <div className="mt-2">
                {!formValidation.description && <InvalidDescriptionEmpty />}
              </div>
            </div>
            <div>
              <label
                htmlFor="item_price"
                className="text-sm font-medium text-gray-600"
              >
                Price
              </label>
              <input
                type="number"
                className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm bg-gray-100 focus:outline-sky-500 block"
                placeholder="Enter item price"
                id="item_price"
                pattern="[0-9]*"
                onChange={handlePriceInput}
                min="0"
                ref={inputPrice}
                required
              />
              <div className="mt-2">
                {!formValidation.price && <InvalidPriceEmpty />}
              </div>
            </div>
          </div>
        </div>
        <div className="space-x-2 flex justify-end">
          <button
            type="button"
            onClick={onCancelSellItemClick}
            className="inline-flex bg-red-500 text-white rounded-lg px-6 py-2 font-bold"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex bg-sky-500 text-white rounded-lg px-6 py-2 font-bold"
          >
            Sell
          </button>
        </div>
      </form>
    </div>
  );
};

export default SellItemForm;
