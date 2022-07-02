import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/apiClient";
import { cleanCookies, getCookies, updateCookies } from "../utils/cookie";

const AuthContextData = {
  signIn: Promise,
  signUp: Promise,
  isAuthenticated: false,
  user: undefined,
};

const AuthContext = createContext({ AuthContextData });

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const router = useRouter();

  const signIn = async (formState) => {
    try {
      const { data } = await api.post("/api/auth/signin", {
        id: formState.id,
        password: formState.password,
      });
      const { id, name, access_token } = data;
      updateCookies(access_token, access_token);
      setUser({ id, name });
      router.push("/");
      return data;
    } catch (error) {
      return error;
    }
  };

  const signUp = async (newUser) => {
    try {
      const response = await api.post("/api/auth/signup", {
        id: newUser.id,
        name: newUser.name,
        password: newUser.password,
      });
      return response;
    } catch (error) {
      return error;
    }
  };

  const handleFirstVisit = async () => {
    const cookies = getCookies();
    const { token } = cookies;
    if (token) {
      try {
        const { data } = await api.get("/api/user/auth");
        setUser(data);
      } catch (error) {
        setUser(undefined);
        cleanCookies();
        router.push("/");
      }
    }
  };

  useEffect(() => {
    handleFirstVisit();
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signUp, isAuthenticated: !!user, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
