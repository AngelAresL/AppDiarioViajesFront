import PropTypes from "prop-types";

const Entries = ({ data }) => {
  return (
    <ul>
      {data.map((entry) => {
        return (
          <li key={entry.id}>
            <h2>{entry.title}</h2>
            <h3>{entry.place}</h3>
            <img src={`http://localhost:8000/${entry.photos[0].name}`} alt="" />
          </li>
        );
      })}
    </ul>
  );
};
Entries.propTypes = {
  data: PropTypes.array,
};

export default Entries;
