import { key } from "../../common/api";
import JordanIMG from "../../../public/assets/jordan/4.png";
import { BsHandbag, BsHeart } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Logo } from "../../components/Logo";
import { SideOptions } from "../../components/SideOptions";
import { useMaleContext } from "../../context/MaleContext";
import { CardShoes } from "../../components/CardShoes";

export default function Male() {
  const { getJordanShoes, jordanShoes } = useMaleContext();

  useEffect(() => {
    getJordanShoes();
  }, []);
  return (
    <>
      <section className="w-full h-full ">
        <div className="lg:px-36 lg:grid-cols-[320px_79.938rem] lg:grid lg:gap-x-4 ">
          <SideOptions />
          {/* <div className="w-full grid justify-items-center bg-red-500"> */}
          <div className="grid gap-2 lg:grid-cols-[330px_330px_330px] md:grid-cols-2 grid-cols-1 justify-items-center">
            {/*CONTAINER */}
            {jordanShoes &&
              jordanShoes.map((shoe) => <CardShoes shoe={shoe} />)}
          </div>
        </div>
      </section>
    </>
  );
}
