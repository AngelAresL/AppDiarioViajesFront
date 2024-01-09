import { useState } from "react";
import Menu from "../components/Menu";

const LoginPage = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [statusMesage, setStatusMesage] = useState("");
  const authtenticateUser = async () => {
    try {
      const response = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: mail,
          password: pass,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      console.log(data);
      console.log(data.data.token);
      setStatusMesage("ok");

      return data.data.token;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <Menu />
      <div>Pagina de Login</div>
      {statusMesage ? <div>{statusMesage}</div> : <div>-</div>}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const token = await authtenticateUser();

          setMail("");
          setPass("");

          localStorage.setItem("token", token);
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
