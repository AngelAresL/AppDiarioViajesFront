import { NavLink } from "react-router-dom";

const EntriesListPage = () => {
  return (
    <>
      <NavLink to="">Entradas</NavLink>
      <NavLink to="/register">Registro</NavLink>
      <NavLink to="/login">Login</NavLink>
      <div>Pagina de Entradas</div>
    </>
  );
};

export { EntriesListPage };
