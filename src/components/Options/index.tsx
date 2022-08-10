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
  // opacity: 1,
  height: "auto",
};

const closed = {
  // opacity: 0,
  height: 0,
};

//

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
    // setSelected("");

    if (count > id) {
      setCount(id);
    }
  };

  return (
    <AnimatePresence initial={false}>
      <div
        className="option"
        onClick={handleClick}
        // animate={count === id ? open : closed}
        // initial={closed}
        // exit={closed}
        // transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
      >
        <div className="title__picked">
          <h2 className="option__title">{title}</h2> <p>{selected}</p>
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
              <div
                key={index}
                className="option__choices"
                // initial={{ opacity: 0, scale: 0.5 }}
                // animate={{ opacity: 1, scale: 1 }}
                // transition={{
                //   duration: 0.8,
                //   delay: 0.5,
                //   ease: [0, 0.71, 0.2, 1.01],
                // }}
                // animate={count === id ? { scale: 1 } : { scale: 0.8 }}
                // transition={{ duration: 0.8 }}
              >
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
