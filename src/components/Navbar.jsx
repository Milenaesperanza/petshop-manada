import CartWidget from "./CartWidget";
import { FaDog } from "react-icons/fa6";
import { FaCat } from "react-icons/fa6";



function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Petshop Manada</h2>

      <ul className="navbar-categories">
        <li><a href="#"><FaDog className="dog-icon" />  Perros</a></li>
        <li><a href="#"><FaCat className="cat-icon" />  Gatos</a></li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default Navbar