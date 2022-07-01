import axios, {AxiosError} from "axios";

export function setupAPIClient(context) {
  const api = axios.create({
    baseURL: 'http://localhost:5000',
  })

  return api;
}