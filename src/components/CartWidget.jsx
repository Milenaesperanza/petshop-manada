import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartWidget() {
  const { totalitems } = useCart();

  return (
    <div className="cart-widget">
      <span><BsCart4 className="cart-icon" />
      <b>{totalitems}</b>
      </span>
    </div>
  );
}

export default CartWidget