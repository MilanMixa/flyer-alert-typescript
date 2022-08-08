import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type OptionsContextProviderType = {
  children: ReactNode;
};

export type SelectedContextType = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

const initialState = { count: 0, setCount: () => {} };

export const OptionsContext = createContext<SelectedContextType>(initialState);

const OptionsContextProvider: FC<OptionsContextProviderType> = ({
  children,
}) => {
  const [count, setCount] = useState(0);
  return (
    <OptionsContext.Provider value={{ count, setCount }}>
      {children}
    </OptionsContext.Provider>
  );
};

export default OptionsContextProvider;
