import { Button } from "../Button";
import { Logo } from "../Logo";
import { FiSearch, FiUser } from "react-icons/fi";
import { BsBoxSeam, BsHeart } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { RiEyeCloseFill } from "react-icons/ri";

export function NavHeader() {
  return (
    <nav className="w-full h-20 border-gray-200 border-b-2">
      <div className="flex items-center justify-between mx-4 ">
        <div className="flex md:hidden lg:hidden w-14 h-14">
          <AiOutlineMenu
            onClick={() => console.log("a")}
            className="w-10 h-14 lg:hidden md:hidden flex text-gray-500"
          />
          <RiEyeCloseFill className="w-10 h-14 lg:hidden md:hidden flex text-gray-500"/>
        </div>
        <Logo />

        {/* navButtons */}
        <div className="hidden lg:flex w-full gap-10 items-center justify-start">
          <Button>Home</Button>
          <Button>Masculino</Button>
          <Button>Feminino</Button>
        </div>

        {/* inputSearch */}
        <div className="flex items-center">
          <FiSearch className="absolute ml-2 text-gray-500" />
          <input
            placeholder={"pesquisar"}
            type={"text"}
            className={
              "bg-gray-100 text-gray-600 rounded-md px-16 py-2 md:flex lg:flex text-left pl-8 outline-none"
            }
          />
        </div>

        {/* User */}
        <div className="flex w-80 h-20 justify-end gap-5 items-center">
          <BsBoxSeam className="w-5 h-5 text-gray-500" />
          <BsHeart className="w-5 h-5 text-gray-500" />
          {/* <FiUser className="w-5 h-5 text-gray-500" /> */}
        </div>
      </div>

      <div className="w-full h-[calc(100vh-80px)]">
        <div className="flex flex-col lg:hidden md:hidden w-full items-center justify-start">
          <div className="w-full border-b-2 py-2">
            <Button>Home</Button>
          </div>
          <div className="w-full border-b-2 py-2">
            <Button>Masculino</Button>
          </div>
          <div className="w-full border-b-2 py-2">
            <Button>Feminino</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
