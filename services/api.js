import axios, {AxiosError} from "axios";
import { URL_CONSTANT } from "../constant/url.constant";
import { getCookies } from "../utils/cookie";

export function setupAPIClient(context) {
  let cookies = getCookies(context);

  const api = axios.create({
    baseURL: URL_CONSTANT.BASE_URL,
    headers: {
      'x-access-token': cookies.token
    }
  })

  return api;
}