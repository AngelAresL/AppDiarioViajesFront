import { useState } from "react";
import Menu from "../components/Menu";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [statusMesage, setStatusMesage] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          email: mail,
          password: pass,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      console.log(data);
      setStatusMesage(data.message);

      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Menu />
      <div>Pagina de Registro</div>
      {statusMesage ? <div>{statusMesage}</div> : <div>-</div>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchData();
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
