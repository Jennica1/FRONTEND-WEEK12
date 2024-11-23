import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/kingdom")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleSelection = (event) => {
    const selectedCountry = countries.find(
      (country) => country.cca2 === event.target.value
    );
    if (selectedCountry) {
      navigate(`/countries/${selectedCountry.cca2}`, { state: { data: selectedCountry } });
    }
  };

  return (
    <div>
      <h1>World Kingdoms</h1>
      <label htmlFor="country-select">Select a Kingdom:</label>
      <select id="country-select" onChange={handleSelection} defaultValue="">
        <option value="" disabled>
          -- Choose a Country --
        </option>
        {countries.map((country) => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>
      <Outlet />
    </div>
  );
};

export default Countries;
