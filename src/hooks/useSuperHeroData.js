import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = async () => {
  const response = await axios.get("http://localhost:4000/superheroes");
  return response;
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery(
    "super-heroes",
    () => {
      return fetchSuperHeroes();
    },
    {
      staleTime: 30000,
      enabled: false,
      onSuccess,
      onError,
    }
  );
};
