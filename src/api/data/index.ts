import axios from "../axiosInstance";

export const getProduct = (selected: any): any =>
  axios.post(`/api/product`, selected);
