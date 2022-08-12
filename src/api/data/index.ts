import axios from "../axiosInstance";

// const test = { format: "DIN A5 quer" };
export const getProduct = (): any => {
  return axios.post(`/api/product`, {});
};
