import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormGetValues,
  UseFormReset,
  UseFormSetValue,
} from "react-hook-form/dist/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IAuth } from "../interfaces/IAuth";
import { key } from "../common/api";

type Props = {
  children: React.ReactNode;
};

interface AuthContext {
  navigate: (path: string) => void;
  register: UseFormRegister<IAuth & FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  getValues: UseFormGetValues<IAuth>;
  setValue: UseFormSetValue<IAuth>;
  reset: UseFormReset<IAuth>;
  errors: FieldErrors<IAuth>;
  userRegister: () => any;
  setIsLoginForm: Dispatch<SetStateAction<boolean>>;
  user: IAuth | undefined;
  loginUser: () => any;
  userChange: () => any;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext({} as AuthContext);
AuthContext.displayName = "AuthContext";

const loginSchema = yup.object<IAuth>({
  emailLogin: yup
    .string()
    .required("Insira seu email")
    .email(`Forma de email invalida`),
  passwordLogin: yup
    .string()
    .required("Insira sua senha")
    .min(8, "A senha precisa conter no minimo 8 caracteres"),
});

const signUpSchema = yup.object<IAuth>({
  name: yup.string().required("Insira seu nome"),
  surname: yup.string().required("Insira seu Sobrenome"),
  birthDate: yup
    .date()
    .required("Insira sua data de nascimento")
    .typeError("Insira uma data válida"),
  email: yup
    .string()
    .required("Insira seu email")
    .email(`Forma de email invalida`),
  password: yup
    .string()
    .required("Insira sua senha")
    .min(8, "A senha precisa conter no minimo 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password")], "As senhas precisam ser iguais"),
  registered: yup.boolean().oneOf([true], "Você precisa aceitar os termos"),
});

export function AuthContextProvider({ children }: Props) {
  const [user, setUser] = useState<IAuth | undefined>();
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const schema = isLoginForm ? loginSchema : signUpSchema;
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
    setError,
    setValue,
  } = useForm<IAuth>({ resolver: yupResolver(schema) });
  console.log("usuario", user);

  const navigate = useNavigate();

  const userRegister = useCallback(() => {
    console.log("entrou");

    const data = key
      .post("user", {
        name: getValues("name"),
        surname: getValues("surname"),
        birthDate: getValues("birthDate"),
        email: getValues("email"),
        password: getValues("password"),
        confirmPassword: getValues("confirmPassword"),
        registered: getValues("registered"),
      })
      .then((data: any) => setUser(data.data));
  }, [getValues]);

  function userChange() {
    console.log("userChange", getValues("name"));

    const data = key
      .post("user", {
        name: getValues("name"),
        surname: getValues("surname"),
        birthDate: getValues("birthDate"),
        email: getValues("email"),
        password: getValues("password"),
        confirmPassword: getValues("confirmPassword"),
        registered: getValues("registered"),
      })
      .then((data: any) => setUser(data.data));
    console.log(user);
  }

  function loginUser() {
    // if (
    //   getValues("emailLogin").trim() === user?.email.trim() &&
    //   getValues("passwordLogin").trim() === user?.password.trim()
    // ) {
    if (
      getValues("emailLogin").trim() === "aaaa@aaaa" &&
      getValues("passwordLogin").trim() === "aaaa@aaaa"
    ) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/");
      }, 1000);
      console.log("iguais");
    } else {
      console.log(user);

      setError("emailLogin", { message: "Email ou senha estão invalidos." });
      setError("passwordLogin", { message: "Email ou senha estão invalidos." });
      console.log("diferente");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        navigate,
        getValues,
        register,
        handleSubmit,
        reset,
        errors,
        userRegister,
        user,
        loginUser,
        setIsLoginForm,
        setIsLoading,
        isLoading,
        setValue,
        userChange,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
