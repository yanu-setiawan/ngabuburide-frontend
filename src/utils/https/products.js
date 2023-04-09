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

export const getDetailProduct = (id, controller) => {
  const url = `${baseUrl}product/${id}`;
  return axios.get(url, { signal: controller.signal });
};

export const createProduct = (
  fileSatu,
  fileDua,
  fileTiga,
  fileEmpat,
  body,
  controller
) => {
  const url = `${baseUrl}product/add`;
  const formData = new FormData();
  // if (file !== []) {
  //   formData.append("images", [file]);
  // }
  if (fileSatu !== "") formData.append("images", fileSatu);
  if (fileDua !== "") formData.append("images", fileDua);
  if (fileTiga !== "") formData.append("images", fileTiga);
  if (fileEmpat !== "") formData.append("images", fileEmpat);
  Object.keys(body).forEach((key) => {
    formData.set(key, body[key]);
  });
  console.log(formData);
  return axios.post(url, formData, { signal: controller.signal });
};
