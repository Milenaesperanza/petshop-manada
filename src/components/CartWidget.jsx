import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="cart-widget">
      <div className="cart-widget">
        <span><BsCart4 className="cart-icon" />
        <b>{totalItems}</b>
        </span>
      </div>
    </Link>
  );
}

export default CartWidget