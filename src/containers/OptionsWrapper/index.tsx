import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";

//CONTEXT:
import { OptionsContext } from "./OptionsContext";

//COMPONENTS:
import Options from "../../components/Options";

//STYLES:
import "./Options.css";

export type OptionsType = {
  name: string;
};

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // console.log(value, "value value value");

    setSelected((prev: any) => ({
      ...prev,
      [title]: isNaN(Number(value)) ? value : Number(value),
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
          <Options title={title} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default OptionsWrapper;
