import { useState } from "react";

import { Button } from "../Button";
import { Logo } from "../Logo";
import { FiSearch, FiUser } from "react-icons/fi";
import { BsBoxSeam, BsHeart } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { RiEyeCloseFill } from "react-icons/ri";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { NavItem } from "../NavItemMobile";
import { useNavMobileContext } from "../../context/NavMobileContext";
import { NavText } from "../NavText";
import { useShoppingContext } from "../../context/ShoppingContext";

export function NavHeader() {
  const { isMobile, setIsMobile, isOpenModal, setIsOpenModal } =
    useNavMobileContext();
  const { cart } = useShoppingContext();

  return (
    <>
      <nav className="w-full h-20 border-gray-200 border-b-2">
        <div className="flex items-center justify-between mx-4 ">
          <button
            onClick={() => setIsMobile((prev) => !prev)}
            className="flex md:hidden lg:hidden w-14 h-14"
          >
            {isMobile ? (
              <RiEyeCloseFill className="w-10 h-14 lg:hidden md:hidden flex text-gray-500" />
            ) : (
              <AiOutlineMenu className="w-10 h-14 lg:hidden md:hidden flex text-gray-500" />
            )}
          </button>
          <Logo />

          {/* navButtons */}
          <div className="hidden md:flex md:gap-0 md:justify-center lg:flex w-full gap-10 items-center justify-start">
            <Button to="/">Home</Button>
            <Button to="/masculino">Masculino</Button>
            <Button to="/feminino">Feminino</Button>
          </div>

          {/* inputSearch */}
          <div className="flex items-center">
            <FiSearch className="hidden lg:flex lg:absolute ml-2 text-gray-500" />
            <input
              placeholder={"pesquisar"}
              type={"text"}
              className={
                "bg-gray-100 hidden text-gray-600 rounded-md px-16 py-2 md:hidden lg:flex text-left pl-8 outline-none"
              }
            />
          </div>

          {/* User */}
          <div className="flex w-80 h-20 justify-end gap-5 items-center">
            <FiSearch className="lg:hidden ml-2 w-6 h-6 text-gray-500" />
            <button
              onClick={() => {
                setIsOpenModal((state) => !state);
                console.log(isOpenModal);
              }}
              className="relative"
            >
              <BsBoxSeam className="w-6 h-6 text-gray-500 cursor-pointer"></BsBoxSeam>
              {cart.length > 0 && (
                <div className="absolute cursor-pointer flex items-center justify-center w-5 h-5 -top-3 bg-yellow-300 -right-2  rounded-full ">
                  <span className="">{cart.length}</span>
                </div>
              )}
            </button>
            <BsHeart className="w-6 h-6 text-gray-500" />
            {/* <FiUser className="w-5 h-5 text-gray-500" /> */}
          </div>
        </div>

        {isMobile && (
          <div className="w-full h-[calc(100vh-80px)] fixed bg-white md:hidden">
            <div className="flex flex-col lg:hidden md:hidden w-full h-screen items-stretch justify-start ">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/">Masculino</NavItem>
              <NavItem to="/">Feminino</NavItem>
            </div>
          </div>
        )}
      </nav>
      <NavText />
      <Outlet />
    </>
  );
}
