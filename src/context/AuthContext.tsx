import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FieldError,
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form/dist/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IAuth } from "../interfaces/IAuth";

type Props = {
  children: React.ReactNode;
};

interface AuthContext {
  register: UseFormRegister<IAuth & FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: FieldErrors<IAuth>;
}

const AuthContext = createContext({} as AuthContext);
AuthContext.displayName = "AuthContext";

const schema = yup.object({
  name: yup.string().required(),
});

export function AuthContextProvider({ children }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuth>({ resolver: yupResolver(schema) });
  console.log(errors);

  return (
    <AuthContext.Provider value={{ register, handleSubmit, errors }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
