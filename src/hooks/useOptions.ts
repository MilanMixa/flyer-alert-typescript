import { useContext, useMemo } from "react";
import { Props } from "../containers/OptionsWrapper";
import {
  IObject,
  OptionsContext,
} from "../containers/OptionsWrapper/OptionsContext";
import useOptionsWrapperData from "../containers/OptionsWrapper/useOptionsWrapperData";

const useOptions = ({ title, id }: Props) => {
  const { count, setCount, selected, setSelected } = useContext(OptionsContext);
  const { optionsData } = useOptionsWrapperData();

  const memoizedUnique: (string | number)[] = useMemo(
    () =>
      Array.from(
        new Set(
          optionsData?.data.map((item: IObject) => {
            return title === "material"
              ? `${item[title]} ${item.weight}`
              : item[title];
          })
        )
      ),
    [optionsData, title]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let final = {};
    const value = e.target.value;

    if (title === "material") {
      const newValue = value.split(" ");
      final = {
        ...selected,
        material: newValue[0],
        weight: Number(newValue[1]),
      };
    } else {
      final = {
        ...selected,
        [title]: isNaN(Number(value)) ? value : Number(value),
      };
    }

    setSelected(final);

    if (count <= id) {
      setCount(id + 1);
    }
  };

  const handleClick = () => {
    if (count > id) {
      setCount(id);
    }
    if (title === "format") {
      setSelected({});
    }
    if (title === "pages") {
      setSelected({
        format: selected.format,
      });
    }
    if (title === "material") {
      setSelected({
        format: selected.format,
        pages: selected.pages,
      });
    }
    if (title === "color") {
      setSelected({
        format: selected.format,
        pages: selected.pages,
        material: selected.material,
        weight: selected.weight,
      });
    }
  };

  return {
    memoizedUnique,
    handleChange,
    handleClick,
    optionsData,
    count,
    selected,
  };
};

export default useOptions;
