import axios from "axios";

const baseUrl = process.env.REACT_APP_SERVER_HOST;

export const addFavorite = (token, prodId, controller) => {
  const url = `${baseUrl}favorite`;
  return axios.post(
    url,
    { prod_id: prodId },
    {
      signal: controller.signal,
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const getFavorite = (token, controller) => {
  const url = `${baseUrl}favorite`;
  // console.log(token);
  return axios.get(url, {
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteFavorite = (token, prodId, controller) => {
  const url = `${baseUrl}favorite/${prodId}`;
  // console.log(token);
  return axios.delete(url, {
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
};
