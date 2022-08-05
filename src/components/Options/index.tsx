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
  console.log(selected);

  const handleChange = (e: any) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      {selected && (
        <p>
          {title}: {selected}
        </p>
      )}

      {optionsArray.map((option, index) => {
        return (
          <div key={index}>
            <input
              type="radio"
              name={"test"}
              id={option.name}
              value={option.name}
              checked={selected === option.name}
              onChange={handleChange}
            />
            <label htmlFor={option.name}>{option.name}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Options;
