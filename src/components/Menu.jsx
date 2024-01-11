import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink to="/">Entradas</NavLink>
      <NavLink to="/register">Registro</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};
export default Menu;
