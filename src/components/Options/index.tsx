import { OptionsType } from "../../containers/OptionsWrapper";

export type OptionProps = {
  optionsArray: OptionsType[];
};

const Options = ({ optionsArray }: OptionProps) => {
  return (
    <>
      {optionsArray.map((option, index) => {
        return (
          <div key={index} className="option__choices">
            <input
              type="radio"
              name="options"
              id={option.name}
              value={option.name}
            />
            <label htmlFor={option.name}>{option.name}</label>
          </div>
        );
      })}
    </>
  );
};

export default Options;
