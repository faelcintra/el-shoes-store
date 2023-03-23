import classNames from "classnames";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNavMobileContext } from "../../context/NavMobileContext";

type Props = {
  children: React.ReactNode;
  variant?: "default" | "primary";
  to: string;
};

export function NavItem({ children, variant = "default", to }: Props) {
  const navigate = useNavigate();
  const { setIsMobile } = useNavMobileContext();

  let textColor =
    "py-4 px-4 text-gray-400 hover:text-gray-500 transition-all text-lg";
  if (variant === "primary") {
    textColor = "";
  }
  return (
    <button
      onClick={() => {
        setIsMobile((prev) => !prev);
        navigate(to);
      }}
      className={classNames(
        "w-full flex border-b-2 py-2 hover:bg-gray-200 active:bg-gray-300 active:border-gray-300 transition-all",
        textColor
      )}
    >
      {children}
    </button>
  );
}
