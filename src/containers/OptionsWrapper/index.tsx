import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import Options from "../../components/Options";
import "./Options.css";
import { OptionsContext } from "./OptionsContext";

export type OptionsType = {
  name: string;
};

export type TitleType = "color" | "format" | "material" | "product";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected((prev) => ({
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
          {
            <motion.p
              animate={{ scale: [0, 1, 0.5, 1] }}
              transition={{ times: [0, 0.1, 0.9, 1] }}
            >
              {selected[title]}
            </motion.p>
          }
        </div>
        <motion.div
          animate={count === id ? open : closed}
          initial={closed}
          exit={closed}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          style={{ overflow: "hidden" }}
          onChange={handleChange}
        >
          <Options optionsArray={optionsArray} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default OptionsWrapper;
