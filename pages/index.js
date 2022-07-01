import { setupAPIClient } from "../services/api";
import Layout from "../components/layout";

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
  return <Layout {...props}></Layout>;
}
