import Layout from "../components/layout";
import ItemCard from "../components/item/ItemCard";
import { useEffect, useState } from "react";
import SellItemForm from "../components/form/SelItemForm";
import { AlertNotSignIn } from "../components/alert";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import ItemBuySection from "../components/item/ItemBuySection";

export default function Home(props) {
  const { isAuthenticated } = useAuth();
  const [showSell, setShowSell] = useState(false);
  const [showBuy, setShowBuy] = useState(false);
  const [buyItem, setBuyItem] = useState(null);
  const [showAlertSignin, setShowAlertSignin] = useState(false);
  const [item, setItem] = useState(null);
  const [soryBy, setSortBy] = useState("");

  const onSortChange = async (e) => {
    const sortedStr = e.target.value;
    setSortBy(sortedStr);
  };

  useEffect(() => {
    async function fetchItem() {
      const itemOnSell = await (
        await axios.get("http://localhost:5000/api/item/onsell")
      ).data;
      if (itemOnSell) {
        setItem(itemOnSell);
      }
    }
    fetchItem();
  }, []);

  useEffect(() => {
    async function fetchItem() {
      const item_url = `http://localhost:5000/api/item/onsell/${soryBy}`;
      const itemOnSellSort = await (await axios.get(item_url)).data;
      if (itemOnSellSort) {
        setItem(itemOnSellSort);
      }
    }
    fetchItem();
  }, [soryBy]);

  const handleSellShow = () => {
    if (isAuthenticated) setShowSell(true);
    else {
      setShowAlertSignin(true);
    }
  };

  const handleSellCancel = () => {
    setShowSell(false);
  };

  const handleCloseAlert = () => {
    setShowAlertSignin(false);
  };

  return (
    <Layout>
      {showAlertSignin && (
        <AlertNotSignIn handleCloseAlert={handleCloseAlert} />
      )}
      <div className="container mt-4 flex flex-col md:flex-row gap-6">
        <div className="flex md:hidden gap-4 whitespace-nowrap justify-between items-center">
          <div>
            <button
              onClick={handleSellShow}
              className="flex md:hidden bg-sky-500 text-white font-bold px-6 py-1 rounded-lg"
            >
              Sell Item
            </button>
          </div>
          <div>
            <select
              onChange={onSortChange}
              className="font-medium border rounded-md text-sm focus:outline-sky-500"
            >
              <option value="" className="font-bold">
                Relevance
              </option>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="az">Name: A-Z</option>
              <option value="za">Name: Z-A</option>
              <option value="low">Price: Low-High</option>
              <option value="high">Price: High-Low</option>
            </select>
          </div>
        </div>
        <div className="space-y-6 flex-1">
          <button
            onClick={handleSellShow}
            className="hidden md:flex bg-sky-500 text-white font-bold px-6 py-1 rounded-lg"
          >
            Sell Item
          </button>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {item?.map((item) => {
              return (
                <ItemCard
                  handleCardClick={() => {
                    setShowBuy(true);
                    setBuyItem(item);
                  }}
                  key={item.id}
                  item={item}
                  src={item.img_url}
                />
              );
            })}
          </div>
          {/* <div>
            <Pagination />
          </div> */}
        </div>
        <div className="hidden md:block space-y-4 whitespace-nowrap pr-9">
          <h2 className="font-bold mb-1 text-gray-800">Relevance</h2>
          <div className="text-sm flex flex-col gap-1 text-gray-700">
            <div
              className="cursor-pointer hover:underline"
              onClick={() => setSortBy("latest")}
            >
              Latest
            </div>
            <div
              className="cursor-pointer hover:underline"
              onClick={() => setSortBy("oldest")}
            >
              Oldest
            </div>
            <div
              className="cursor-pointer hover:underline"
              onClick={() => setSortBy("az")}
            >
              Name: A-Z
            </div>
            <div
              className="cursor-pointer hover:underline"
              onClick={() => setSortBy("za")}
            >
              Name: Z-A
            </div>
            <div
              className="cursor-pointer hover:underline"
              onClick={() => setSortBy("low")}
            >
              Price: Low-High
            </div>
            <div
              className="cursor-pointer hover:underline"
              onClick={() => setSortBy("high")}
            >
              Price: High-Low
            </div>
          </div>
        </div>
      </div>
      {showSell && <SellItemForm onCancelSellItemClick={handleSellCancel} />}
      {showBuy && (
        <ItemBuySection
          item={buyItem}
          handleClose={() => {
            setShowBuy(false);
          }}
        />
      )}
    </Layout>
  );
}
