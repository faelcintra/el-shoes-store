import { useEffect } from "react";
import ReactLoading from "react-loading";

import { Button } from "../../components/Button";
import { FormUser } from "../../components/FormUser";
import { Input } from "../../components/Input";
import { InputCheck } from "../../components/InputCheck";
import { useAuthContext } from "../../context/AuthContext";

export function Login() {
  const {
    register,
    reset,
    getValues,
    handleSubmit,
    errors,
    loginUser,
    user,
    setIsLoginForm,
    isLoading,
  } = useAuthContext();

  useEffect(() => {
    setIsLoginForm(true);
    reset();
  }, [user]);

  return (
    <FormUser isLoading={isLoading} description="Faça o login para continuar.">
      {isLoading && (
        <div className="z-20 h-72 right-0 opacity-100 top-28  w-full absolute flex items-center justify-center">
          <ReactLoading
            type="spin"
            width={"15%"}
            height={"15%"}
            color="black"
          />
        </div>
      )}
      <Input
        fieldName="emailLogin"
        placeholder="Email"
        register={register}
        errors={errors}
      />
      <Input
        fieldName="passwordLogin"
        placeholder="Senha"
        register={register}
        errors={errors}
      />
      {/* <InputCheck
          register={register}
          label="Mantenha-me conectado"
          fieldName={"registered"}
          errors={errors}
        /> */}
      <Button children={"Entrar"} variant onClick={handleSubmit(loginUser)} />
    </FormUser>
  );
}
