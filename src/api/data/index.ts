import { IObject } from "../../containers/OptionsWrapper/OptionsContext";
import axios from "../axiosInstance";

export const getProduct = (selected: IObject) =>
  axios.post(`/api/product`, selected);
