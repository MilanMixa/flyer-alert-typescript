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

export interface IObject {
  color?: string;
  format?: string;
  id?: string;
  material?: string;
  pages?: number;
  product_type_id?: number;
  product_type_name?: string;
  weight?: number;
}

export type SelectedContextType = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  selected: IObject;
  setSelected: Dispatch<SetStateAction<IObject>>;
};

const initialState = {
  count: 0,
  setCount: () => {},
  selected: {},
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
