import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { API } from "../services/apiClient";
import { cleanCookies, getCookies, updateCookies } from "../utils/cookie";

const AuthContextData = {
  signIn: Promise,
  isAuthenticated: false,
};

const AuthContext = createContext({ AuthContextData });

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const router = useRouter();

  const signIn = async (formState) => {
    try {
      const { data } = await API.post("/api/auth/signin", {
        id: formState.id,
        password: formState.password,
      });
      const { id, name, access_token } = data;
      updateCookies(access_token, access_token);
      setUser({ id, name });
      router.push("/");
      return data;
    } catch (error) {
      console.log("Error signing in");
      return null;
    }
  };

  const handleFirstVisit = async () => {
    const cookies = getCookies();
    const { token } = cookies;
    if (token) {
      try {
      } catch (error) {
        setUser(undefined);

        cleanCookies();
        router.push("/");

        console.log("Error firstvisit function");
      }
    }
  };

  useEffect(() => {
    handleFirstVisit();
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
