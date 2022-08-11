import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import "./Options.css";
import { OptionsContext } from "./OptionsContext";

export type OptionsType = {
  name: string;
};

export type Props = {
  optionsArray: OptionsType[];
  title: string;
  id: number;
};

const open = {
  height: "auto",
};

const closed = {
  height: 0,
};

const Options = ({ optionsArray, title, id }: Props) => {
  const { count, setCount } = useContext(OptionsContext);
  const [selected, setSelected] = useState("");

  const handleChange = (e: any) => {
    setSelected(e.target.value);
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
    <AnimatePresence initial={false}>
      <div className="option" onClick={handleClick}>
        <div className="title__picked">
          <h2 className="option__title">{title}</h2>
          <motion.p>{selected}</motion.p>
        </div>
        <motion.div
          animate={count === id ? open : closed}
          initial={closed}
          exit={closed}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          style={{ overflow: "hidden" }}
        >
          {optionsArray.map((option, index) => {
            return (
              <div key={index} className="option__choices">
                <input
                  type="radio"
                  name="options"
                  id={option.name}
                  value={option.name}
                  onChange={handleChange}
                />
                <label htmlFor={option.name}>{option.name}</label>
              </div>
            );
          })}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Options;
