import classNames from "classnames";

import Logo from "../../assets/logoB.png";

type PropsForm = {
  children?: React.ReactNode;
  description: string;
  isLoading?: boolean;
};

export function FormUser({ children, description, isLoading }: PropsForm) {
  return (
    <section
      className={classNames(
        "flex opacity-100 w-screen h-screen justify-center",
        {
          "opacity-50": !!isLoading,
        }
      )}
    >
      <article className="relative ">
        <div className="bg-white p-4 lg:w-[calc(100vw-75vw)]">
          <div className="flex flex-col w-full text-center items-center mb-12">
            <img src={Logo} className="w-28 h-28 mb-4" />
            <h1>{description}</h1>
          </div>
          {children}
        </div>
      </article>
    </section>
  );
}
