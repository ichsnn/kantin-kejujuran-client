import { parseCookies, setCookie, destroyCookie } from "nookies";

export const getCookies = (context) => {
  return parseCookies(context);
};

export const updateCookies = (token, refreshToken, context) => {
  // max age one day
  const maxAge = 60 * 60 * 24; // 1 day
  const path = "/";

  setCookie(context, "token", token, {
    maxAge,
    path,
  });

  setCookie(context, "refreshToken", refreshToken, {
    maxAge,
    path,
  });
};

export const cleanCookies = (context) => {
  for (const token of ["token", "refreshToken"]) {
    destroyCookie(context, token);
  }
};
