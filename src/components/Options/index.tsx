import { OptionsType } from "../../containers/OptionsWrapper";

export type OptionProps = {
  optionsArray: OptionsType[];
};

const Options = ({ optionsData, title }: any) => {
  console.log(optionsData?.data);
  return (
    <>
      {optionsData?.data.map((option: any, index: any) => {
        return (
          <div key={index} className="option__choices">
            <label htmlFor={option.id}>
              <input
                type="radio"
                name="options"
                id={option.id}
                value={option[title]}
              />
              {option[title]}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default Options;
