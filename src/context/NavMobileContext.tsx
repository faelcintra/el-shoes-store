import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type Props = {
  isMobile: boolean;
  setIsMobile: Dispatch<SetStateAction<boolean>>;
};

const NavMobileContext = createContext<Props>(null!);
NavMobileContext.displayName = "NavMobile";

export function NavMobileProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <NavMobileContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </NavMobileContext.Provider>
  );
}

export function useNavMobileContext() {
  return useContext(NavMobileContext);
}
