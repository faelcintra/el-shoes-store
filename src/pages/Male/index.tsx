import { key } from "../../common/api";
import JordanIMG from "../../../public/assets/jordan/4.png";
import { BsHandbag, BsHeart } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Logo } from "../../components/Logo";
import { SideFilter } from "../../components/SideFilter";
import { useMaleContext } from "../../context/MaleContext";
import { CardShoes } from "../../components/CardShoes";
import { SideCart } from "../../components/SideCart";
import { useNavMobileContext } from "../../context/NavMobileContext";

export default function Male() {
  const { getJordanShoes, jordanShoes } = useMaleContext();
  const { isOpenModal } = useNavMobileContext();
  useEffect(() => {
    getJordanShoes();
  }, []);
  return (
    <>
      <SideCart />
      <section className="w-full h-full absolute top-44  ">
        <div className="lg:px-36 lg:grid-cols-[320px_79.938rem] mt-10 h-full lg:grid lg:gap-x-4 flex w-full ">
          <SideFilter />
          {/* <div className="w-full grid justify-items-center bg-red-500"> */}
          <div className="grid ml-96 gap-2 right-0 lg:grid-cols-[330px_330px_330px] md:grid-cols-2  grid-cols-1 justify-items-center">
            {/*CONTAINER */}
            {jordanShoes?.map((shoe) => (
              <CardShoes key={shoe.id} shoe={shoe} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
