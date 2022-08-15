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

// interface IObject {
//   color: string;
//   format: string;
//   material: string;
//   product: string;
// }

export type SelectedContextType = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  selected: any;
  setSelected: Dispatch<SetStateAction<any>>;
};

const initialState = {
  count: 0,
  setCount: () => {},
  selected: { color: "", format: "", material: "", pages: 0 },
  setSelected: () => {},
};

export const OptionsContext = createContext<SelectedContextType>(initialState);

const OptionsContextProvider: FC<OptionsContextProviderType> = ({
  children,
}) => {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState({});
  return (
    <OptionsContext.Provider value={{ count, setCount, selected, setSelected }}>
      {children}
    </OptionsContext.Provider>
  );
};

export default OptionsContextProvider;
