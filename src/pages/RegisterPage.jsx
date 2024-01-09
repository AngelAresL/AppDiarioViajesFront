import { NavLink } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <NavLink to="/">Entradas</NavLink>
      <NavLink to="">Registro</NavLink>
      <NavLink to="/login">Login</NavLink>
      <div>Pagina de Registro</div>
    </>
  );
};

export { RegisterPage };
