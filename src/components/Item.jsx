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
    </article>
  )
}

export default Item