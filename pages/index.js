import { setupAPIClient } from "../services/api";
import Layout from "../components/layout";
import ItemCard from "../components/item/ItemCard";
import Pagination from "../components/item/pagination";
import minecraft from "../public/minecraft.png";

export const getServerSideProps = async (context) => {
  try {
    const apiClient = setupAPIClient(context);
    const { data } = await apiClient.get("/api/user/home");
    return {
      props: {
        isSignedIn: true,
        user: data,
      },
    };
  } catch (error) {
    return {
      props: {
        isSigned: false,
        user: null,
      },
    };
  }
};

export default function Home(props) {
  return (
    <Layout {...props}>
      <div className="container mt-4 flex flex-col md:flex-row gap-4">
        <div className="whitespace-nowrap pr-9">
          <h2 className="font-bold mb-1 text-gray-800">Relevance</h2>
          <div className="text-sm flex flex-col gap-1 text-gray-700">
            <div>Latest</div>
            <div>Oldest</div>
            <div>Name: A-Z</div>
            <div>Name: Z-A</div>
            <div>Price: Low-High</div>
            <div>Price: High-Low</div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
          <div className="my-6">
            <Pagination />
          </div>
        </div>
      </div>
    </Layout>
  );
}
