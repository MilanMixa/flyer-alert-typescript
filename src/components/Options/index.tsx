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
  console.log(selected);
  const [showing, setShowing] = useState(true);

  const handleChange = (e: any) => {
    setSelected(e.target.value);
  };

  const handleClick = () => {
    setShowing((p) => !p);

    if (count <= id) {
      setCount(id + 1);
    }
    if (count > id) {
      setCount(id);
    }
  };

  return (
    <div className="option">
      <div onClick={handleClick}>
        {!showing ? (
          <div className="title__picked">
            <h2 className="option__title">{title}</h2> <p>{selected}</p>
          </div>
        ) : (
          <p>{title}</p>
        )}
      </div>
      {optionsArray.map((option, index) => {
        return (
          <div key={index} className="option__choices">
            {count === id && (
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
