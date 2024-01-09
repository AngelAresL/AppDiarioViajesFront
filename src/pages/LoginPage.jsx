import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <NavLink to="/">Entradas</NavLink>
      <NavLink to="/register">Registro</NavLink>
      <NavLink to="">Login</NavLink>
      <div>Pagina de Login</div>
    </>
  );
};

export { LoginPage };
