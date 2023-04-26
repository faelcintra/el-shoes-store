import { useState } from "react";
import { useMaleContext } from "../../context/MaleContext";
import { IFilter } from "../../interfaces/IFilter";

export function SideFilter() {
  const { jordanShoes, filterShoes } = useMaleContext();
  const [filterOpen, setFilterOpen] = useState(false);

  const [colors, setColors] = useState<IFilter[]>([
    { name: "blue", bg: "bg-blue-500", selected: false },
    { name: "red", bg: "bg-red-500", selected: false },
    { name: "green", bg: "bg-green-500", selected: false },
    { name: "Preto", bg: "bg-black", selected: false },
    { name: "Branco", bg: "bg-white", selected: false },
    { name: "Laranja", bg: "bg-orange-500", selected: false },
    { name: "Amarelo", bg: "bg-yellow-500", selected: false },
    { name: "Roxo", bg: "bg-purple-500", selected: false },
    { name: "Cinza", bg: "bg-gray-500", selected: false },
    { name: "Marrom", bg: "bg-amber-800", selected: false },
    { name: "Rosa", bg: "bg-pink-500", selected: false },
    { name: "Bege", bg: "bg-orange-300", selected: false },
  ]);
  const someSelected = colors.some((color) => color.selected === true);

  const [sizes, setSizes] = useState([
    { number: 34, selected: false },
    { number: 35, selected: false },
    { number: 36, selected: false },
    { number: 37, selected: false },
    { number: 38, selected: false },
    { number: 39, selected: false },
    { number: 40, selected: false },
    { number: 41, selected: false },
    { number: 42, selected: false },
    { number: 43, selected: false },
    { number: 44, selected: false },
    { number: 45, selected: false },
  ]);

  function openFilter() {
    setFilterOpen((state) => !state);
    console.log(filterOpen);
  }

  function addBorder(params: {
    name?: string;
    number?: number;
    selected: boolean;
  }) {
    console.log(params.selected);

    setSizes((sizes) =>
      sizes.map((size) =>
        size.number === params.number
          ? { ...size, selected: !size.selected }
          : { ...size, selected: false }
      )
    );
  }
  return (
    <>
      <section className=" h-[calc(100vh-42vh)] fixed  bg-gray-100 border-gray-400 bg--100 w-80 lg:flex lg:flex-col rounded-xl">
        {filterOpen ? (
          <button
            onClick={() => openFilter()}
            className="mx-4 bg-red-500 text-2xl"
          >
            Filtros V
          </button>
        ) : (
          <div className="">
            <article className="flex flex-col">
              <span
                className={
                  "text-lg py-3 px-2 border-b-2 rounded-t-xl border-gray-400 "
                }
              >
                Cores
              </span>
              <div
                className={`flex gap-x-6 gap-y-4 flex-wrap w-full p-2 h-full text-sm items-center ${
                  someSelected ? "justify-start ml-1" : "justify-center"
                } `}
              >
                {colors?.map((color) => (
                  <div
                    key={color.name}
                    className="flex flex-col items-center w-14 h-14 justify-end"
                  >
                    <button
                      onClick={(e) => {
                        filterShoes(color, colors, setColors);
                      }}
                      className={`w-8 h-8 rounded-full hover:border-gray-900 hover:border-2 ${
                        color.bg
                      } ${color.selected && "border-2 border-gray-900"}`}
                    ></button>
                    <span>{color.name}</span>
                  </div>
                ))}
              </div>
            </article>
            <article className="flex flex-col">
              <span className="text-lg py-3 px-2 my-2 border-t-2 border-b-2 border-gray-400 ">
                Tamanhos
              </span>
              <div className="flex gap-6 flex-wrap w-full h-48 text-sm items-center justify-center">
                {sizes?.map((size) => (
                  <button
                    onClick={() => addBorder(size)}
                    key={size.number}
                    className={`flex flex-col items-center w-14 h-10 rounded-lg border-2 hover:border-gray-900 ${
                      size.selected && " border-2 border-gray-900"
                    } border-gray-200 bg-white justify-center`}
                  >
                    <span>{size.number}</span>
                  </button>
                ))}
              </div>
            </article>
          </div>
        )}
      </section>
    </>
  );
}