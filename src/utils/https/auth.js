import axios from "axios";

const baseUrl = process.env.REACT_APP_SERVER_HOST;

export const authRegister = (email, password, role_id, controller) => {
  const url = `${baseUrl}auth/register`;
  const body = { email, password, role_id, phone: "0812345" };
  return axios.post(url, body, { signal: controller.signal });
};

export const authLogin = (email, password, controller) => {
  const url = `${baseUrl}auth`;
  const body = { email, password };
  return axios.post(url, body, { signal: controller.signal });
};
