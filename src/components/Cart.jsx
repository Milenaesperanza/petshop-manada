import  { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart () {
    const { cart, removeItem, totalPrice } = useCart();

    if (cart.length === 0) {
        return (
            <main>
                <h1>Tu carrito está vacío</h1>
                <Link to="/">Volver al catálogo</Link>
            </main>
        );
    }

    return (
        <main>
            <h1>Carrito de compras</h1>
            {cart.map((producto) => (
                <article key={producto.id}>
                    <h2>{producto.name}</h2>

                    <p>Precio: ${producto.price}</p>

                    <p>Cantidad: {producto.quantity}</p>

                    <p>
                        Subtotal: ${producto.price * producto.quantity}
                    </p>

                    <button onClick={() => removeItem(producto.id)}>
                        Eliminar
                    </button>
                </article>
            ))}

            <h2>Total: ${totalPrice}</h2>

            <button>Finalizar Compra</button>
        </main>
    );
}

export default Cart;