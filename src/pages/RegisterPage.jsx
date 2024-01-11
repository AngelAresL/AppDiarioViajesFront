import { useState } from "react";
import Menu from "../components/Menu";
import useDiferentsFetch from "../hooks/fetchHooks";

const RegisterPage = () => {
  const { registerFetch } = useDiferentsFetch();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [statusMesage, setStatusMesage] = useState("");

  return (
    <>
      <Menu />
      <h2 className="text-3xl font-bold underline">Pagina de Registro</h2>
      {statusMesage ? <div>{statusMesage}</div> : <div>-</div>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          registerFetch(name, mail, pass, setStatusMesage);
          setName("");
          setMail("");
          setPass("");
        }}
      >
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="mail">Correo</label>
          <input
            type="text"
            id="mail"
            value={mail}
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="pass">Contraseña</label>
          <input
            type="text"
            id="pass"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>
        <button>Enviar</button>
      </form>
    </>
  );
};

export { RegisterPage };
