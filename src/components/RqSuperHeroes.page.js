import { useSuperHeroesData } from "../hooks/useSuperHeroData";
import { Link } from "react-router-dom";

export const RQSuperHeroesPage = () => {
  const onSuccess = () => {
    console.log("onSuccess");
  };

  const onError = () => {
    console.log("onError");
  };

  const { isLoading, data, isError, error, refetch } = useSuperHeroesData(
    onSuccess,
    onError
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>Rq Superheroes</h2>
      <button onClick={refetch}>Click me</button>
      {data?.data.map((superHero) => (
        <div key={superHero.id}>
          <Link to={`/rq-super-heroes/${superHero.id}`}>{superHero.name}</Link>
        </div>
      ))}
    </>
  );
};
