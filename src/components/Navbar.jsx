import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { FaDog } from "react-icons/fa6";
import { FaCat } from "react-icons/fa6";



function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <h1 className="navbar-logo">Petshop Manada</h1>
      </Link>
      

      <ul className="navbar-categories">
        <li><Link to="/category/perro"><FaDog className="dog-icon" />  Perros</Link></li>
        <li><Link to="/category/gato"><FaCat className="cat-icon" />  Gatos</Link></li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default Navbar