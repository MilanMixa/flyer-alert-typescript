import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import Options from "../../components/Options";
import "./Options.css";
import { OptionsContext } from "./OptionsContext";
import useOptionsWrapper from "./useOptionsWrapper";

export type OptionsType = {
  name: string;
};

export type TitleType = "color" | "format" | "material" | "pages";

export type Props = {
  optionsArray: OptionsType[];
  title: TitleType;
  id: number;
};

const open = {
  height: "auto",
};

const closed = {
  height: 0,
};

const OptionsWrapper = ({ optionsArray, title, id }: Props) => {
  const { count, setCount, selected, setSelected } = useContext(OptionsContext);

  const { optionsData } = useOptionsWrapper();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // let sel: any = e.target.value;
    // console.log("sdasds", sel);
    // const p = parseInt(e.target.value, 0);
    // sel = !isNaN(p) && p;
    // console.log("sdasds", sel);

    const value = e.target.value;
    console.log(value, ":value");
    // ? e.target.valueAsNumber
    // : e.target.value;

    setSelected((prev: any) => ({
      ...prev,
      [title]: e.target.value,
    }));
    if (count <= id) {
      setCount(id + 1);
    }
  };

  const handleClick = () => {
    if (count > id) {
      setCount(id);
    }
  };

  return (
    <AnimatePresence>
      <div className="option">
        <div className="title__picked" onClick={handleClick}>
          <h2 className="option__title">{title}</h2>
          {<motion.p>{selected[title]}</motion.p>}
        </div>
        <motion.div
          animate={count === id ? open : closed}
          initial={closed}
          exit={closed}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          style={{ overflow: "hidden" }}
          onChange={handleChange}
        >
          <Options optionsData={optionsData} title={title} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default OptionsWrapper;
