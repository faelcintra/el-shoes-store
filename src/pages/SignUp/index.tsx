import { useNavigation } from "react-router-dom";
import JordanImg from "../../assets/logo.png";
import Logo from "../../assets/logoB.png";
import { Button } from "../../components/Button";
import { FormUser } from "../../components/FormUser";
import { Input } from "../../components/Input";
import { InputCheck } from "../../components/InputCheck";
import { useAuthContext } from "../../context/AuthContext";

export function SignUp() {
  const { navigate, register, handleSubmit, errors, userRegister, user } =
    useAuthContext();

  const userR = false;
  const handleForm = (data: any) => {
    console.log("errors?", errors);
    userRegister();
  };

  return (
    <FormUser description="Cadastre-se para ficar por dentro de todas as novidades!">
      {!user ? (
        <form onSubmit={handleSubmit(handleForm)}>
          <Input
            placeholder="Nome"
            register={register}
            fieldName={"name"}
            errors={errors}
          />
          <Input
            placeholder="Sobrenome"
            register={register}
            fieldName={"surname"}
            errors={errors}
          />
          <Input
            type="date"
            placeholder="Data de Nascimento"
            register={register}
            fieldName={"birthDate"}
            errors={errors}
          />
          <Input
            placeholder="Email"
            register={register}
            fieldName={"email"}
            errors={errors}
          />
          <Input
            placeholder="Senha"
            register={register}
            fieldName={"password"}
            errors={errors}
          />
          <Input
            placeholder="Confirme sua senha"
            register={register}
            fieldName={"confirmPassword"}
            errors={errors}
          />
          <div className="flex w-full justify-between mb-8">
            <Button children={"Masculino"} />
            <Button children={"Feminino"} />
          </div>
          <InputCheck
            register={register}
            fieldName="registered"
            label={
              "Se inscreva para receber novidades, ofertas e descontos especiais!"
            }
            errors={errors}
          />
          <div>
            <Button
              variant
              children={"teste"}
              onClick={handleSubmit(userRegister)}
            />
          </div>
        </form>
      ) : (
        <article>
          <div>
            <Button
              variant
              children={"Login"}
              onClick={() => navigate("/login")}
            />
          </div>
        </article>
      )}
    </FormUser>
  );
}
