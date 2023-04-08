import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { IJordan } from "../interfaces/IJordan";

type Children = { children: React.ReactNode };

interface Shopping {
  addShoes: (newShoe: IJordan) => void;
  updateQuantity: (id: number, quantity: number) => void;
  cart: IJordan[];
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const ShoppingContext = createContext({} as Shopping);
ShoppingContext.displayName = "ShoppingCartContext";

export function ShoppingContextProvider({ children }: Children) {
  const [cart, setCart] = useState<IJordan[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function addShoes(newShoe: IJordan): void {
    const existShoes = cart.some((shoe: IJordan) => shoe.id === newShoe.id);
    if (!existShoes) {
      newShoe.quantity = 1;
      console.log("add");

      return setCart((shoes) => [...shoes, newShoe]);
    } else {
      console.log("remove");
      const removeShoe = cart.filter((shoe) => shoe.id !== newShoe.id);
      return setCart(removeShoe);
    }
  }

  function updateQuantity(id: number, quantity: number): void {
    console.log(quantity);

    const findId = cart.map((shoe) => {
      if (shoe.id === id) {
        return { ...shoe, quantity: (shoe.quantity += quantity) };
      }
      return shoe;
    });
    return setCart(findId);
  }

  return (
    <ShoppingContext.Provider
      value={{ addShoes, updateQuantity, isLoading, setIsLoading, cart }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}

export function useShoppingContext() {
  return useContext(ShoppingContext);
}
