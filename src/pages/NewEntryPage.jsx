import { useState, useContext } from "react";
import TokenAuth from "../TokenProvider";
import useDiferentsFetch from "../hooks/fetchHooks";
import Menu from "../components/Menu";

const NewEntryPage = () => {
  const { newEntryFetch } = useDiferentsFetch();
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [token] = useContext(TokenAuth);
  return (
    <>
      <Menu />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          newEntryFetch(title, place, description, e, token);
          setTitle("");
          setPlace("");
          setDescription("");
        }}
      >
        <div>
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="place">Ubicación</label>
          <input
            type="text"
            id="place"
            value={place}
            onChange={(e) => {
              setPlace(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="description">Descripción</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="photoA">Imagen</label>
          <input type="file" id="photoA" name="photoA" />
        </div>

        <button>Enviar</button>
      </form>
    </>
  );
};
export { NewEntryPage };
