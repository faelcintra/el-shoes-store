type Props = {
    children: any;
}

export function Button({ children }:Props) {
  return (
    <div>
      <button className="py-2 px-4 text-gray-400 text-lg">{children}</button>
    </div>
  );
}
