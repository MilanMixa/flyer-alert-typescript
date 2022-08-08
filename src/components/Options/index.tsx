import { useState } from "react";
import "./Options.css";

export type OptionsType = {
  name: string;
};

export type Props = {
  optionsArray: OptionsType[];
  title: string;
};

const Options = ({ optionsArray, title }: Props) => {
  const [selected, setSelected] = useState("");
  const [showing, setShowing] = useState(true);

  const handleChange = (e: any) => {
    setSelected(e.target.value);
  };

  const handleClick = (e: any) => {
    console.log("clicked");
    setShowing((p) => !p);
  };

  return (
    <div>
      {selected && !showing && (
        <p onClick={handleClick}>
          {title}: {selected}
        </p>
      )}

      {optionsArray.map((option, index) => {
        return (
          <div key={index} className="test">
            {showing && (
              <>
                <input
                  type="radio"
                  name="options"
                  id={option.name}
                  value={option.name}
                  // checked={selected === option.name}
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
