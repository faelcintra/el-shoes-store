import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

type Props = {
  isMobile: boolean;
  setIsMobile: Dispatch<SetStateAction<boolean>>;
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
};

const NavMobileContext = createContext<Props>(null!);
NavMobileContext.displayName = "NavMobile";

export function NavMobileProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const bBody = document.querySelector("body");
    if (bBody) {
      if (isMobile) {
        bBody.style.overflow = "hidden";
      } else {
        bBody.style.overflow = "auto";
      }
    }
  }, [isOpenModal]);

  return (
    <NavMobileContext.Provider
      value={{ isMobile, setIsMobile, isOpenModal, setIsOpenModal }}
    >
      {children}
    </NavMobileContext.Provider>
  );
}

export function useNavMobileContext() {
  return useContext(NavMobileContext);
}
