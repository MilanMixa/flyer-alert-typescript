import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { OptionsContext } from "./OptionsContext";
import { getProduct } from "../../api/data";

const useOptionsWrapper = () => {
  // const { selected } = useContext(OptionsContext);

  const fetchSelectedOption = async () => {
    const { data } = await getProduct();

    return data;
  };

  const { data: optionsData, status: optionsStatus } = useQuery(
    ["options"],
    fetchSelectedOption
  );

  return {
    optionsData,
    optionsStatus,
  };
};

export default useOptionsWrapper;
