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

const Options = ({ optionsArray, title, id }: Props) => {
  const { count, setCount } = useContext(OptionsContext);
  console.log(count);
  const [selected, setSelected] = useState("");
  const [showing, setShowing] = useState(true);

  const handleChange = (e: any) => {
    setSelected(e.target.value);
  };

  const handleClick = () => {
    setShowing((p) => !p);
    //setCount(count + 1);
    // if (count > 4) {
    //   setCount(count - 1);
    // }
    // if (count < 3) {
    //   setCount(count + 1);
    // }

    setCount(id + 1);
    if (count >= 3) {
      setCount(id);
    }
  };

  return (
    <div className="option">
      {selected && !showing && (
        <p onClick={handleClick} className="title__picked">
          {title}: {selected}
        </p>
      )}
      {optionsArray.map((option, index) => {
        return (
          <div key={index} className="option__choices">
            {showing && count === id && (
              <>
                <input
                  type="radio"
                  name="options"
                  id={option.name}
                  value={option.name}
                  //  checked={selected === option.name}
                  onChange={handleChange}
                  onClick={handleClick}
                />
                <label htmlFor={option.name}>{option.name}</label>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Options;
