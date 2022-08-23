import { AnimatePresence, motion } from "framer-motion";

//COMPONENTS:
import Options from "../../components/Options";

//STYLES:
import "./Options.css";

//HOOKS:
import useOptions from "../../hooks/useOptions";
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
  const {
    memoizedUnique,
    handleChange,
    handleClick,
    optionsData,
    count,
    selected,
  } = useOptions({
    title,
    id,
  });

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
