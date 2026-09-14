import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <article className="item-card">
      <img
        src={product.img}
        alt={product.name}
        className="item-image"
      />

      <h2>{product.name}</h2>
      <p>${product.price}</p>

      <Link to={`/item/${product.id}`}>
        Ver detalle
      </Link>
    </article>
  )
}

export default Item