import { useEffect, useState } from "react";
import { getProductById } from "../mock/products";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductById(1)
      .then((productoEncontrado) => {
        setProducto(productoEncontrado);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!producto) {
    return <p>Cargando...</p>;
  }

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;