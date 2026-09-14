import alimentoPerro from "../assets/alimento-perro.png";
import alimentoGato from "../assets/alimento-gato.png";
import camita from "../assets/camita.png";
import correa from "../assets/correa.png";
import litera from "../assets/litera.png";
import pelota from "../assets/pelota.png";
import rascador from "../assets/rascador.png";
import snacks from "../assets/snacks.png";
import varita from "../assets/varita.png";

const products = [
  {
    id: 1,
    name: "Alimento Balanceado para Perro Adulto",
    description: "Croquetas premium para perros adultos, ricas en proteínas.",
    category: "perro",
    stock: 10,
    price: 17900,
    img: alimentoPerro,
  },
  {
    id: 2,
    name: "Alimento Balanceado para Gato Adulto",
    description: "Croquetas premium para gatos adultos, con omega 3 y 6.",
    category: "gato",
    stock: 15,
    price: 15800,
    img: alimentoGato,
  },
  {
    id: 3,
    name: "Correa Reflectante para Perro",
    description: "Correa resistente con detalles reflectantes para paseos nocturnos.",
    category: "perro",
    stock: 4,
    price: 9500,
    img: correa,
  },
  {
    id: 4,
    name: "Rascador para Gato",
    description: "Rascador de sisal con base de cartón, ideal para cuidar sus uñas.",
    category: "gato",
    stock: 6,
    price: 12000,
    img: rascador,
  },
  {
    id: 5,
    name: "Cama Acolchada para Mascotas",
    description: "Cama suave y lavable, apta para perros y gatos pequeños.",
    category: "perro",
    stock: 2,
    price: 20000,
    img: camita,
  },
  {
    id: 6,
    name: "Pelota de Goma para Perro",
    description: "Pelota resistente a mordidas, ideal para juegos de buscar.",
    category: "perro",
    stock: 7,
    price: 4500,
    img: pelota,
  },
  {
    id: 7,
    name: "Arenero para Gato",
    description: "Arenero amplio con bordes altos para evitar derrames.",
    category: "gato",
    stock: 3,
    price: 18000,
    img: litera,
  },
  {
    id: 8,
    name: "Snacks para Perro",
    description: "Premios que ayudan a cuidar la higiene bucal mientras juegan.",
    category: "perro",
    stock: 4,
    price: 6500,
    img: snacks,
  },
  {
    id: 9,
    name: "Juguete Varita para Gato",
    description: "Varita con plumas para estimular el instinto de caza.",
    category: "gato",
    stock: 1,
    price: 7200,
    img: varita,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = products.find(
        (product) => product.id === productId
      );

      if (producto) {
        resolve(producto);
      } else {
        reject(new Error("Producto no encontrado"));
      }
    }, 500);
  });
};