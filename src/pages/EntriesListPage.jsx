import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Entries from "../components/Entries";

import useDiferentsFetch from "../hooks/fetchHooks";
import { Link } from "react-router-dom";

const EntriesListPage = () => {
  const { listEntryFetch } = useDiferentsFetch();
  const [entry, setEntry] = useState([]);

  useEffect(() => {
    listEntryFetch(setEntry);
  }, []);
  return (
    <>
      <Menu />
      <h2 className="text-3xl font-bold underline">
        Pagina de Entradas de Viajes
      </h2>
      <Link to={"/entry/new"}>Nueva Entrada</Link>

      <Entries data={entry} />
    </>
  );
};

export { EntriesListPage };
