import React from "react";
import { useSuperHeroData } from "../hooks/useSuperHero";
import { useParams } from "react-router-dom";

export const RQSuperHero = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useSuperHeroData(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};
