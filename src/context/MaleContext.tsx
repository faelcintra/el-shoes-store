import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { key } from "../common/api";
import { IJordan } from "../interfaces/IJordan";
import { IFilter } from "../interfaces/IFilter";

type Props = {
  children: React.ReactNode;
};
interface maleContext {
  getJordanShoes: () => IJordan[];
  jordanShoes: IJordan[];

  filterShoes: (
    item: IFilter,
    array: IFilter[],
    setArray: (array: (colors: IFilter[]) => IFilter[]) => void
  ) => void;
}

const MaleContext = createContext({} as maleContext);
MaleContext.displayName = "MaleContext";

export function MaleContextProvider({ children }: Props) {
  const [jordanShoes, setJordanShoes] = useState<IJordan[]>([]);
  const [copyState, setCopyState] = useState<IJordan[]>([]);
  const [clicked, setClicked] = useState(false);
  const [copyColor, setCopyColor] = useState<IFilter[]>([]);

  function getJordanShoes() {
    const teste = "dois";
    try {
      const { data }: IJordan[] | any = key
        .get("dunk")
        .then((res: any) => {
          setCopyState(res.data);
          setJordanShoes(res.data);
        })
        .catch((error: Error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
    return jordanShoes;
  }
  function filterShoes(
    item: IFilter,
    array: IFilter[],
    setArray: (array: (params: IFilter[]) => IFilter[]) => void
  ) {
    setCopyColor(array);

    setArray((params) =>
      params.map((prevParams: IFilter) =>
        prevParams.name === item.name
          ? { ...prevParams, selected: !prevParams.selected }
          : { ...prevParams, selected: false }
      )
    );
    if (!item.selected) {
      console.log("filtrar true");
      setArray((params) => params.filter((prev) => prev.name === item.name));

      const filtered = copyState.filter((shoe) => shoe.color === item.name);
      return setJordanShoes(filtered);
    } else {
      console.log("copy", copyColor);

      setArray(() => copyColor);
      console.log("filtrar false");
      return setJordanShoes(copyState);
    }
  }

  useEffect(() => {
    getJordanShoes();
  }, []);

  return (
    <MaleContext.Provider value={{ jordanShoes, getJordanShoes, filterShoes }}>
      {children}
    </MaleContext.Provider>
  );
}

export function useMaleContext() {
  return useContext(MaleContext);
}

// if (array.length === 12) {
//   setCopyColor(array);
//   console.log(copyColor);
//   console.log("mais que 12");
// } else {
//   console.log("menos que 12");
// }
// console.log(array);
// const oneColor = array.filter((cor) => cor.name === color.name);
// setArray(oneColor);

// setArray(copyColor);
// console.log(array);
