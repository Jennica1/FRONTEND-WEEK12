import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();

  if (!state || !state.data) {
    return <p>No country selected.</p>;
  }

  const { data } = state;

  return (
    <div>
      <h2>{data.name.common}</h2>
      <p><strong>Capital:</strong> {data.capital ? data.capital[0] : "N/A"}</p>
      <p><strong>Region:</strong> {data.region}</p>
      <p><strong>Population:</strong> {data.population.toLocaleString()}</p>
      <p><strong>Languages:</strong> {Object.values(data.languages || {}).join(", ")}</p>
      <img src={data.flags.svg} alt={`${data.name.common} flag`} width="200" />
    </div>
  );
};

export default Details;
