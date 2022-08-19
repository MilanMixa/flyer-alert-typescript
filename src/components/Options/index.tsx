const Options = ({
  memoizedUnique,
}: {
  memoizedUnique: (string | number)[];
}) => {
  return (
    <>
      {memoizedUnique.map((option: string | number, index: number) => {
        return (
          <div key={index} className="option__choices">
            <label htmlFor={option as string}>
              <input
                type="radio"
                name="options"
                id={option as string}
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
