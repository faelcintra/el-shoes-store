import { BsHandbag, BsHeart, BsFillBagPlusFill } from "react-icons/bs";
import { TbSquareMinus, TbSquarePlus } from "react-icons/tb";
import { IJordan } from "../../interfaces/IJordan";
import { useState } from "react";
import { useMaleContext } from "../../context/MaleContext";
import { useShoppingContext } from "../../context/ShoppingContext";
import { Button } from "../Button";
import { ButtonQuantity } from "../ButtonQuantity";

type Props = {
  shoe: IJordan;
  inCart?: boolean;
};

export function CardShoes({ shoe, inCart }: Props) {
  const [carBg, setCarBg] = useState(false);
  const { addShoes, updateQuantity, cart } = useShoppingContext();

  const shoeInCart = cart.find((shoeInCart) => shoeInCart.id === shoe.id);
  return (
    <div
      key={shoe.id}
      className="w-min flex justify-center items-start 2 rounded-lg h-[calc(100vh-400px)]  "
      onClick={() => console.log(shoe)}
    >
      <div className="bg-gray-100 w-80 h-80 rounded-xl ">
        <div className="flex items-center relative rounded-xl w-full h-full overflow-hidden">
          <div className="flex w-full rotate-12">
            <BsHeart className="w-6 h-6  absolute -rotate-12" />
            <div className="w-80 h-80  absolute -top-48 -right-16 rounded-full bg-gray-300"></div>
            <img className="-rotate-45 w-full box-border" src={shoe.img} />
          </div>
        </div>

        <div className="flex flex-col my-5 mx-2">
          <span>Nike Air Jordan 1 High University</span>
          <span className="">Casual</span>
          <span className="font-bold text-lg text-center">R$ 1.399,99</span>
          <div className="flex w-full justify-end">
            {inCart ? (
              <div className="flex justify-around w-full">
                <ButtonQuantity
                  onDisabled={shoe.quantity === 0}
                  onClick={() => updateQuantity(shoe.id, -1)}
                >
                  <TbSquareMinus size={24} />
                </ButtonQuantity>
                {shoe.quantity}
                <TbSquarePlus
                  size={24}
                  className="bg-emerald-500 cursor-pointer"
                  onClick={() => updateQuantity(shoe.id, 1)}
                />
              </div>
            ) : (
              <button
                onClick={() => {
                  addShoes(shoe);
                  setCarBg((state) => !state);
                }}
                className={`w-12 flex justify-center items-center rounded-lg border-2 ${
                  shoeInCart ? "bg-sky-400 border-none" : "bg-transparent"
                } border-gray-100 h-10`}
              >
                <BsFillBagPlusFill size={30} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
