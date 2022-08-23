import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { OptionsContext } from "./OptionsContext";
import { getProduct } from "../../api/data";

const useOptionsWrapperData = () => {
  const { selected } = useContext(OptionsContext);

  const fetchSelectedOption = async () => {
    const { data } = await getProduct(selected);

    return data;
  };

  const { data: optionsData, status: optionsStatus } = useQuery(
    ["options", selected],
    fetchSelectedOption
  );

  return {
    optionsData,
    optionsStatus,
  };
};

export default useOptionsWrapperData;
