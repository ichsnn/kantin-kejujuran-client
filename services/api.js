import axios, {AxiosError} from "axios";
import { getCookies } from "../utils/cookie";

export function setupAPIClient(context) {
  let cookies = getCookies(context);

  const api = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      'x-access-token': cookies.token
    }
  })

  return api;
}