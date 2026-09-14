import { BsCart4 } from "react-icons/bs";

function CartWidget() {
  return (
    <div className="cart-widget">
      <span><BsCart4 className="cart-icon" />   <b>3</b></span>
    </div>
  )
}

export default CartWidget