import CartWidget from "./CartWidget"

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Petshop Manada</h2>

      <ul className="navbar-categories">
        <li><a href="#">Perros</a></li>
        <li><a href="#">Gatos</a></li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default Navbar