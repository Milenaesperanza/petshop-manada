import { useEffect, useState } from "react"
import { getProducts } from "../mock/products"
import ItemList from "./ItemList"

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
    <section className="item-list-container">
      <h1 style={{ textAlign: "center" }}>{greeting}</h1>

      <ItemList items={items} />
    </section>
  )
}

export default ItemListContainer