import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <NavLink to="/">Entradas</NavLink>
      <NavLink to="/register">Registro</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  );
};
export default Menu;
