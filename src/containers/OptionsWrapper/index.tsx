import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";

//CONTEXT:
import { OptionsContext } from "./OptionsContext";

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

  const unique = Array.from(
    new Set(
      optionsData?.data.map((item: any) => {
        return title === "material"
          ? `${item[title]} ${item.weight}`
          : item[title];
      })
    )
  );

  // unique treba da ide u useMemo

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const final = { ...selected };

    if (title === "material") {
      const newValue = value.split(" ");
      final["weight"] = Number(newValue[1]);
      final["material"] = newValue[0];
    } else {
      final[title] = isNaN(Number(value)) ? value : Number(value);
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
  };
  console.log(selected);
  return (
    <AnimatePresence>
      <div className="option">
        <div className="title__picked" onClick={handleClick}>
          <h2 className="option__title">{title}</h2>
          {
            <motion.p>
              {selected[title]} {title === "material" ? selected.weight : ""}
            </motion.p>
          }
        </div>
        {/* if da bi ispitali da li postoji optionData */}
        <motion.div
          animate={count === id ? open : closed}
          // initial={closed}
          // exit={closed}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          style={{ overflow: "hidden" }}
          onChange={handleChange}
        >
          <Options unique={unique} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default OptionsWrapper;
