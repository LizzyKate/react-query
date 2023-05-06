import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHero = async (id) => {
  const response = await axios.get(`http://localhost:4000/superheroes/${id}`);
  return response;
};

export const useSuperHeroData = (id) => {
  return useQuery(["super-hero", id], async () => {
    return fetchSuperHero(id);
  });
};
