import { useQuery } from "react-query";
import fetchContinents from "./fetchContinents";

const Continents = () => {
  const { isLoading, data } = useQuery("continents", fetchContinents);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="continents">
      <h2>Continents</h2>

      {data?.data.continents.map((continent, key) => {
        return <div key={key}>{continent.name}</div>;
      })}
    </div>
  );
};

export default Continents;
