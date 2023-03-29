import { BsHandbag, BsHeart } from "react-icons/bs";
import { IJordan } from "../../interfaces/IJordan";
type Props = {
  shoe: IJordan;
};
export function CardShoes({ shoe }: Props) {
  return (
    <div className="w-min flex justify-center items-start m-2 rounded-lg h-[calc(100vh-400px)]  ">
      <div key={shoe.id} className="bg-gray-100 w-80 h-80 rounded-xl ">
        <div className="flex items-center relative rounded-xl w-full h-full overflow-hidden">
          <div className="flex w-full rotate-12">
            <BsHeart className="w-6 h-6 absolute -rotate-12" />
            <div className="w-80 h-80 absolute -top-48 -right-16 rounded-full bg-orange-300"></div>
            <img className="-rotate-45 w-full box-border" src={shoe.img} />
          </div>
        </div>

        <div className="flex flex-col my-5 mx-2">
          <span>Nike Air Jordan 1 High University</span>
          <span className="">Casual</span>
          <span className="font-bold text-lg">R$ 1.399,99</span>
          <div className="flex w-full justify-end">
            <span className="w-12 flex justify-center items-center rounded-lg border-2 border-gray-100 h-10">
              <BsHandbag size={30} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
