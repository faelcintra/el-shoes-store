import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useShoppingContext } from "../../context/ShoppingContext";
import { BiTrash } from "react-icons/bi";

export default function ShoppingCart() {
  const { cart } = useShoppingContext();

  return (
    <section
      className="bg-red-600 w-screen h-screen items-center
    flex justify-center"
    >
      <div className="bg-violet-500 w-[calc(50vw)] h-[calc(50vh)] ">
        <div className="w-full bg-lime-400 h-full bg--300">
          {/*  */}
          <article className="flex bg-orange-500 w-full justify-end relative">
            {/*  */}
            <div
              className="bg-yellow-400 w-[calc(100%-341px)] 
             grid-cols-[128px_128px_128px] grid  justify-start"
            >
              <span
                children={"Quantidade"}
                className="bg-pink-500 text-center"
              />
              <span
                children={"Valor Unitário"}
                className=" bg-pink-500 text-center"
              />
              <span
                children={"Valor Total"}
                className=" bg-pink-500 text-center"
              />
            </div>
            {/*  */}
          </article>
          {/*  */}
          {cart.map((item) => (
            <div className="flex bg-pink-500">
              {/* IMAGEM E DESCRIÇÃO*/}
              <div className="flex w-[calc(24vw)] items-center bg-red-800">
                <div className=" flex items-center justify-center w-32 h-32">
                  <img
                    src={item.img}
                    className="bg-black flex items-center justify-center pb-3"
                  />
                </div>
                <div
                  className="flex items-start justify-start bg-blue-500 flex-col h-[calc(88.8px)]
              w-[calc(100%-8rem)]"
                >
                  <span>Tênis {item.name}</span>
                  <span>Cor: {item.color}</span>
                  <span>Tamanho: {item.size}</span>
                </div>
              </div>

              {/* QUANTIDADE */}
              <div className="bg-white w-32 h-32 flex justify-center flex-col relative items-center">
                <div className="bg-sky-500 flex items-start justify-center  w-32 h-[calc(88.8px)]">
                  <div
                    className="bg-gray-100 w-28 h-8 flex justify-between items-center
                    border-2 border-black rounded-sm                "
                  >
                    <button
                      children={<AiOutlinePlus />}
                      className=" h-full px-2 border-r-2 border-black 
                    hover:bg-black hover:text-white"
                    />
                    <div
                      className=" w-full h-full flex items-center
                   justify-center"
                    >
                      <span children={item.quantity} className="" />
                    </div>
                    <button
                      children={<AiOutlineMinus />}
                      className=" h-full px-2 border-l-2 border-black 
                    hover:bg-black hover:text-white"
                    />
                  </div>
                </div>
              </div>
              {/* QUANTIDADE */}
              <div className="bg-white w-32 h-32 flex justify-center flex-col relative items-center">
                <div className="bg-sky-500 flex items-start  w-32 h-[calc(88.8px)]">
                  <div className="bg-amber-900 h-12 flex items-start justify-center w-full relative">
                    <span
                      children={"R$ 489,99"}
                      className="h-[calc(65px)]  bg-red-200 "
                    />
                  </div>
                </div>
              </div>

              {/* QUANTIDADE */}
              <div className="bg-white w-32 h-32 flex justify-center flex-col relative items-center">
                <div className="bg-sky-500 flex items-start  w-32 h-[calc(88.8px)]">
                  <div className="bg-amber-900 h-12 flex items-start justify-center w-full relative">
                    <span
                      children={"R$ 489,99"}
                      className="h-[calc(65px)]  bg-red-200 "
                    />
                  </div>
                </div>
              </div>
              {/* QUANTIDADE */}
              <div className="bg-white w-32 h-32 flex justify-center flex-col relative items-end">
                <div className="bg-sky-500 flex items-start  w-16 h-[calc(88.8px)]">
                  <div className="bg-violet-600 h-12 flex items-start justify-center w-full">
                    <span
                      children={<BiTrash size={24} />}
                      className="h-[calc(28px)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
