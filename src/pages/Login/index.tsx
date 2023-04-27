import JordanImg from "../../assets/logo.png";
import Logo from "../../assets/logoB.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuthContext } from "../../context/AuthContext";

export function Login() {
  const { register, handleSubmit, errors } = useAuthContext();
  const handleForm = (data: any) => {
    console.log("data?", errors);
  };
  return (
    <section className="flex w-screen h-screen justify-center">
      <article className="">
        <div className="bg-white p-4 lg:w-[calc(100vw-70vw)]">
          {/* LOGO  */}
          <div className="flex flex-col w-full text-center items-center">
            <img src={Logo} className="w-28 h-28" />
            <h1>Cadastre-se para ficar por dentro de todas as novidades!</h1>
          </div>
          {/* INPUTS */}
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
            <div className="flex w-full justify-between">
              <Button children={"Masculino"} />
              <Button children={"Feminino"} />
            </div>
            <div>
              <Button variant children={"teste"} />
            </div>
          </form>
        </div>
      </article>
    </section>
  );
}
