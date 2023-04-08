import axios from "axios";

const baseUrl = process.env.REACT_APP_SERVER_HOST;

export const getDataProducts = (params, controller) => {
  const url = `${baseUrl}product/all?${params}`;
  // console.log(url);
  return axios.get(url, { signal: controller.signal });
};

export const getMetaCategories = (controller) => {
  const url = `${baseUrl}product/categories/count`;
  // console.log(url);
  return axios.get(url, { signal: controller.signal });
};
