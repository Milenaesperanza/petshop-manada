import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../mock/products";
import ItemList from "./ItemList";


function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getProducts()
      .then((data) => {
        const productosFiltrados = id
          ? data.filter((producto) => producto.category === id)
          : data

        setItems(productosFiltrados)
      })
      .catch((error) => {
        console.error("Error cargando productos", error)
      })
  }, [id])

  return (
    <section className="item-list-container">
      <h1 style={{ textAlign: "center" }}>{greeting}</h1>

      <ItemList items={items} />
    </section>
  )
}

export default ItemListContainer