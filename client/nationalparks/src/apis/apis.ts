/** @format */

import axiosInstance from "./axiosInstance";

export const apiGet = (url: string, params = {}, config = {}) => {
  return axiosInstance.get(url, {
    params,
    ...config,
  });
};

export const apiPost = (url: string, data = {}, config = {}) => {
  return axiosInstance.post(url, data, config);
};

export const apiPut = (url: string, data = {}, config = {}) => {
  return axiosInstance.put(url, data, config);
};

export const apiDelete = (url: string, config = {}) => {
  return axiosInstance.delete(url, config);
};
