import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(0);

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  const agregar = () => {
    onAdd(cantidad);
  };

  return (
    <div>
      <button onClick={restar}>-</button>

      <span>{cantidad}</span>

      <button onClick={sumar}>+</button>

      <button onClick={agregar}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;