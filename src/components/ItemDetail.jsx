import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";

function ItemDetail({ producto }) {
  const { addItem } = useCart();

  const handleAdd = (cantidad) => {
    if (cantidad > 0) {
      addItem(producto, cantidad);
    }
  };


  return (
    <section className="item-detail">
      <div className="item-detail-image">
        <img src={producto.img} alt={producto.name} />
      </div>

      <div className="item-detail-info">
        <h2>{producto.name}</h2>
        <p>{producto.description}</p>
        <p>Categoría: {producto.category}</p>
        <p>Stock disponible: {producto.stock}</p>
        <strong>${producto.price}</strong>

        <ItemCount
          stock={producto.stock}
          onAdd={handleAdd}
        />
      </div>
    </section>
  );
}

export default ItemDetail;