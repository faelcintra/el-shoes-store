import React, { createContext, useContext, useState } from "react";
import { key } from "../common/api";
import { IJordan } from "../interfaces/IJordan";

type Props = {
  children: React.ReactNode;
};
interface maleContext {
  getJordanShoes: () => IJordan[];
  jordanShoes: IJordan[];
}

const MaleContext = createContext({} as maleContext);
MaleContext.displayName = "MaleContext";

export function MaleContextProvider({ children }: Props) {
  const [jordanShoes, setJordanShoes] = useState<IJordan[]>([]);

  function getJordanShoes() {
    try {
      const { data }: IJordan[] | any = key
        .get("dunk")
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
