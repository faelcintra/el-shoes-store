import { CardShoes } from "../../components/CardShoes";
import { useShoppingContext } from "../../context/ShoppingContext";
import { IJordan } from "../../interfaces/IJordan";

export default function ShoppingCart() {
  const { cart } = useShoppingContext();

  return (
    <div>
      {cart.map((shoe) => (
        <CardShoes shoe={shoe} inCart />
      ))}
    </div>
  );
}
