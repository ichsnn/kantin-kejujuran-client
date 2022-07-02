import { getCookies } from "./cookie";

const SSRAuth = async (context) => {
  const cookies = getCookies(context);
  if (cookies.token)
    return {
      redirect: {
        destination: "/",
      },
    };
  return {
    props: {},
  }
};

export default SSRAuth;