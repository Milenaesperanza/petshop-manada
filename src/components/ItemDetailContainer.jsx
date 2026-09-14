import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../mock/products";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductById(Number(id))
      .then((productoEncontrado) => {
        setProducto(productoEncontrado);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!producto) {
    return <p>Cargando...</p>;
  }

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;