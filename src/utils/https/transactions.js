import axios from "axios";

const baseUrl = process.env.REACT_APP_SERVER_HOST;

export const createTransaction = (body, controller) => {
  const url = `${baseUrl}transaction/add`;
  return axios.post(url, body, { signal: controller.signal });
};
