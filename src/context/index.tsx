import React from "react";
import { MaleContextProvider } from "./MaleContext";
import { NavMobileProvider } from "./NavMobileContext";

export function AppContexts({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMobileProvider>
        <MaleContextProvider>{children}</MaleContextProvider>
      </NavMobileProvider>
    </>
  );
}
