//REACT CUSTOM QUERY HOOK
import useOptionsWrapper from "../../containers/OptionsWrapper/useOptionsWrapper";

const Options = ({ title }: { title: string }) => {
  const { optionsData } = useOptionsWrapper();
  // console.log(optionsData?.data);

  const unique = Array.from(
    new Set(
      optionsData?.data.map((item: any) => {
        return title === "material"
          ? `${item[title]} ${item.weight}`
          : item[title];
      })
    )
  );
  // console.log(unique, "unique");
  // izbaciti option napolje, staviti u useMemo,

  return (
    <>
      {unique.map((option: any, index: number) => {
        return (
          <div key={index} className="option__choices">
            <label htmlFor={option.id}>
              <input
                type="radio"
                name="options"
                id={option.id}
                value={option}
              />
              {option}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default Options;
