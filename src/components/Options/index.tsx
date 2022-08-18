const Options = ({ memoizedUnique }: { memoizedUnique: any }) => {
  return (
    <>
      {memoizedUnique.map((option: any, index: number) => {
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
