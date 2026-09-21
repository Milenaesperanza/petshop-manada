# Petshop Manada

Petshop Manada es un e-commerce desarrollado con React para la venta de productos para perros y gatos.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- React Router DOM
- React Icons

## Instalación

Clonar el repositorio:

`git clone https://github.com/Milenaesperanza/petshop-manada.git`

Ingresar a la carpeta del proyecto:

`cd petshop-manada`

Instalar las dependencias:

`npm install`

## Ejecución

Iniciar el servidor de desarrollo:

`npm run dev`

Luego abrir en el navegador la URL local indicada por Vite en la terminal.

## Funcionalidades

- Visualización del catálogo completo de productos.
- Filtrado de productos por categoría.
- Categorías disponibles para perros y gatos.
- Vista detallada de cada producto.
- Visualización del precio, descripción, categoría y stock.
- Selector de cantidad limitado por el stock disponible.
- Agregado de productos al carrito.
- Acumulación de cantidades al agregar nuevamente un producto existente.
- Visualización de la cantidad total de productos en el carrito.
- Vista detallada del carrito de compras.
- Visualización del precio y la cantidad de cada producto.
- Cálculo del subtotal por producto.
- Cálculo del total de la compra.
- Eliminación de productos del carrito.
- Navegación entre las distintas secciones mediante React Router.

## Rutas principales

- `/`: catálogo completo de productos.
- `/category/perro`: productos para perros.
- `/category/gato`: productos para gatos.
- `/item/:id`: detalle de un producto.
- `/cart`: carrito de compras.

## Estructura principal

- `src/components/`: componentes reutilizables de la aplicación.
- `src/context/`: contexto global para administrar el carrito.
- `src/mock/`: datos simulados de los productos.
- `src/assets/`: recursos gráficos utilizados en el proyecto.

## Scripts disponibles

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: genera la versión de producción.
- `npm run lint`: ejecuta ESLint para verificar el código.
- `npm run preview`: previsualiza la versión de producción.

## Estado del proyecto

El proyecto utiliza datos simulados ubicados en `src/mock/products.js`.

La funcionalidad de checkout y la conexión con un backend todavía se encuentran pendientes de implementación.