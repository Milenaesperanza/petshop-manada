import { useEffect, useState } from "react"
import { getProducts } from "../mock/products"

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    getProducts()
      .then((data) => {
        setItems(data)
      })
      .catch((error) => {
        console.error("Error cargando productos", error)
      })
  }, [])

  return (
    <section>
      <h1 style={{ textAlign: "center" }}>{greeting}</h1>

      <p>Se cargaron {items.length} productos.</p>
    </section>
  )
}

export default ItemListContainer