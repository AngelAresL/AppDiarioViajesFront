import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Entries from "../components/Entries";

const EntriesListPage = () => {
  const [entry, setEntry] = useState([]);
  const getFetch = async () => {
    try {
      const response = await fetch("http://localhost:8000/entries");
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      setEntry(data.data.entries);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    getFetch();
  }, []);
  return (
    <>
      <Menu />
      <div>Pagina de Entradas de Viajes</div>
      <Entries data={entry} />
    </>
  );
};

export { EntriesListPage };
