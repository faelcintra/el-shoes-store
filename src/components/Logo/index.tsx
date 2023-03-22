import LogoIMG from "../../assets/logob.png";

export function Logo() {
  return (
    <div className="flex w-96 h-20 items-center">
      <img src={LogoIMG} alt="Logo imagem" className="w-18 h-14 p-2 mr-2"/>
      <h1 className="text-xl hidden md:flex lg:flex">EL-Shoes</h1>
    </div>
  );
}
