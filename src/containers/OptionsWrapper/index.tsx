import { AnimatePresence, motion } from "framer-motion";
import { useContext, useMemo } from "react";

//CONTEXT:
import { IObject, OptionsContext } from "./OptionsContext";

//COMPONENTS:
import Options from "../../components/Options";

//STYLES:
import "./Options.css";
import useOptionsWrapper from "./useOptionsWrapper";

export type TitleType = "color" | "format" | "material" | "pages";

export type Props = {
  title: TitleType;
  id: number;
};

const open = {
  height: "auto",
};

const closed = {
  height: 0,
};

const OptionsWrapper = ({ title, id }: Props) => {
  const { count, setCount, selected, setSelected } = useContext(OptionsContext);
  const { optionsData } = useOptionsWrapper();

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
    // const final: IObject = { ...selected };
    let final = {};
    const value = e.target.value;

    if (title === "material") {
      const newValue = value.split(" ");
      final = {
        ...selected,
        material: newValue[0],
        weight: Number(newValue[1]),
      };
      // final["weight"] = Number(newValue[1]);
      // final["material"] = newValue[0];
    } else {
      final = {
        ...selected,
        [title]: isNaN(Number(value)) ? value : Number(value),
      };
      // final[title] = isNaN(Number(value))
      //   ? (value as never)
      //   : (Number(value) as never);
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

  return (
    <AnimatePresence>
      <div className="option">
        <div className="title__picked" onClick={handleClick}>
          <h2 className="option__title">{title}</h2>
          {selected[title] && (
            <motion.p
              animate={{ x: 10 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {selected[title]} {title === "material" ? selected.weight : ""}
            </motion.p>
          )}
        </div>
        {optionsData && (
          <motion.div
            animate={count === id ? open : closed}
            initial={closed}
            exit={closed}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{ overflow: "hidden" }}
            onChange={handleChange}
          >
            <Options memoizedUnique={memoizedUnique} />
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default OptionsWrapper;
