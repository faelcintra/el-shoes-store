export function SideFilter() {
  const colors = [
    { name: "Azul", bg: "bg-blue-500" },
    { name: "Red", bg: "bg-red-500" },
    { name: "Verde", bg: "bg-green-500" },
    { name: "Preto", bg: "bg-black" },
    { name: "Branco", bg: "bg-white" },
    { name: "Laranja", bg: "bg-orange-500" },
    { name: "Amarelo", bg: "bg-yellow-500" },
    { name: "Roxo", bg: "bg-purple-500" },
  ];

  const sizes = [
    { size: "34" },
    { size: "35" },
    { size: "36" },
    { size: "37" },
    { size: "38" },
    { size: "39" },
    { size: "40" },
    { size: "41" },
    { size: "42" },
    { size: "43" },
    { size: "44" },
    { size: "45" },
  ];
  return (
    <>
      <section className="  h-[calc(100vh-44vh)] fixed border-b-2  border-t-2 border-gray-400 bg-gray-100 w-80 lg:flex lg:flex-col rounded-xl  ">
        <article className="flex flex-col">
          <span className="text-lg py-3 px-2 border-b-2 rounded-t-xl border-gray-400 ">
            Cores
          </span>
          <div className="flex gap-6 flex-wrap w-full h-48 text-sm items-center justify-center">
            {colors?.map((color) => (
              <div
                key={color.name}
                className="flex flex-col items-center w-14 h-14 justify-center "
              >
                <span
                  className={`w-8 h-8 block rounded-full hover:border-gray-900 border-2 border-gray-200 ${color.bg}`}
                ></span>
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
              <div
                key={size.size}
                className="flex flex-col items-center w-14 h-10 rounded-lg border-2 hover:border-gray-900 border-gray-200 bg-white justify-center "
              >
                <span>{size.size}</span>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}
