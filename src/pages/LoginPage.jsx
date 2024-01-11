import { useState, useContext } from "react";
import Menu from "../components/Menu";
import TokenAuth from "../TokenProvider";
import useDiferentsFetch from "../hooks/fetchHooks";

const LoginPage = () => {
  const { loginFetch } = useDiferentsFetch();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [statusMesage, setStatusMesage] = useState("");
  const [, setToken] = useContext(TokenAuth);

  return (
    <>
      <Menu />
      <h2 className="text-3xl font-bold underline">Pagina de Login</h2>
      {statusMesage ? <div>{statusMesage}</div> : <div>-</div>}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          loginFetch(mail, pass, setStatusMesage, setToken);
          setMail("");
          setPass("");
        }}
      >
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

export { LoginPage };
