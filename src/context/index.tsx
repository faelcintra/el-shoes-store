import React from "react";
import { MaleContextProvider } from "./MaleContext";
import { NavMobileProvider } from "./NavMobileContext";
import { ShoppingContextProvider } from "./ShoppingContext";
import { AuthContextProvider } from "./AuthContext";

export function AppContexts({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMobileProvider>
        <MaleContextProvider>
          <ShoppingContextProvider>
            <AuthContextProvider>{children} </AuthContextProvider>
          </ShoppingContextProvider>
        </MaleContextProvider>
      </NavMobileProvider>
    </>
  );
}
