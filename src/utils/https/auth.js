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

export const getProfile = (token, controller) => {
  const url = `${baseUrl}profile`;
  return axios.get(url, {
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateProfile = (token, form, file, controller) => {
  const url = `${baseUrl}profile`;
  const body = new FormData();
  if (file !== "") {
    body.append("image", file);
  }
  Object.keys(form).forEach((key) => {
    body.set(key, form[key]);
  });
  console.log(body);
  return axios.patch(url, body, {
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const authLogout = (token, controller) => {
  const url = `${baseUrl}auth/logout`;
  return axios.patch(url, token, {
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
};
