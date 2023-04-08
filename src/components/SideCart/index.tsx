import ReactLoading from "react-loading";
import { useState } from "react";

import { IoCloseSharp } from "react-icons/io5";
import { BiTrash } from "react-icons/bi";
import { useNavMobileContext } from "../../context/NavMobileContext";
import { useShoppingContext } from "../../context/ShoppingContext";

export function SideCart() {
  const { isOpenModal, setIsOpenModal } = useNavMobileContext();
  const { cart, addShoes, setIsLoading, isLoading } = useShoppingContext();

  return (
    <section>
      {isOpenModal && (
        <div className="w-full h-screen fixed z-20 top-0 right-0">
          <div
            onClick={() => setIsOpenModal(false)}
            className="bg-black w-full h-full fixed opacity-60 top-0 z-10"
          ></div>

          {isLoading && (
            <div className="z-20 h-full bg-gray-200 w-96 right-0 top-0 fixed opacity-60 flex items-center justify-center ">
              <ReactLoading
                type="spin"
                width={"15%"}
                height={"15%"}
                color="black"
              />
            </div>
          )}
          <div className="bg-gray-100 h-full w-96 fixed top-0 right-0 z-10 overflow-y-auto overflow-x-hidden">
            {/* HEADER */}
            <div className="bg-black h-14 relative">
              <div className=" flex items-center w-full h-full mx-2 ">
                <button
                  className="hover:bg-zinc-800 flex items-center absolute justify-center rounded-full w-8 h-8"
                  onClick={() => setIsOpenModal(false)}
                >
                  <IoCloseSharp color="white" size={18} />
                </button>
                <span className="text-gray-100 text-center w-full">
                  Carrinho ( {cart.length} itens )
                </span>
              </div>
            </div>
            {/* Shoes */}

            <div className="flex flex-col items-center w-full">
              {cart?.map((shoe) => (
                <div
                  key={shoe.id}
                  className="border-gray-300 border-b-2 my-8 mx-4 "
                >
                  <div className="flex ">
                    <img className="w-40" src={shoe.img} />
                    <div className="flex flex-col gap-5 ">
                      <span>Nike Air Jordan 1 High University</span>
                      <span>R$ 1.399,99</span>
                    </div>
                    <button
                      onClick={() => {
                        setIsLoading(true);
                        setTimeout(() => {
                          setIsLoading(false);
                          addShoes(shoe);
                        }, 500);
                      }}
                    >
                      <BiTrash size={24} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* PAGAMENTO */}
            <div className="h-60 w-full flex flex-col justify-center items-center gap-2 absolute bottom-0">
              <div className="border-b-2 border-t-2 w-full text-3xl text-center mb-2 ">
                <span>Subtotal: R$ </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <button className="bg-black text-white w-64 h-14 rounded-xl">
                  Finalizar Compra
                </button>
                <button
                  onClick={() => setIsOpenModal(false)}
                  className="bg-black text-white w-64 h-14 rounded-xl"
                >
                  Continuar Comprando
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
