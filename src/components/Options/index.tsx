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
  height: 20,
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
    setSelected("");

    if (count > id) {
      setCount(id);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="option"
        onClick={handleClick}
        //  transition={{ ease: "easeOut", duration: 2 }}
        animate={count === id ? open : closed}
        initial={{ height: 20 }}
        exit={{ height: 20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="title__picked">
          <h2 className="option__title">{title}</h2> <p>{selected}</p>
        </div>

        {count === id &&
          optionsArray.map((option, index) => {
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
    </AnimatePresence>
  );
};

export default Options;
