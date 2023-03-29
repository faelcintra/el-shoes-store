import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { key } from "../common/api";
import { IJordan } from "../interfaces/IJordan";

type Props = {
  children: React.ReactNode;
};

interface maleContext {
  getJordanShoes: () => IJordan[];
  jordanShoes: IJordan[];
}

export const MaleContext = createContext({} as maleContext);
MaleContext.displayName = "MaleContext";

export function MaleContextProvider({ children }: Props) {
  const [jordanShoes, setJordanShoes] = useState<IJordan[]>([]);

  function getJordanShoes() {
    try {
      const { data }: IJordan[] | any = key
        .get("jordan")
        .then((res) => setJordanShoes(res.data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
    return jordanShoes;
  }

  return (
    <MaleContext.Provider value={{ jordanShoes, getJordanShoes }}>
      {children}
    </MaleContext.Provider>
  );
}

export function useMaleContext() {
  return useContext(MaleContext);
}
