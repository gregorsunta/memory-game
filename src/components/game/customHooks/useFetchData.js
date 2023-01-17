import { Pokedex } from 'pokeapi-js-wrapper';
import { useEffect, useState } from 'react';
const pokedex = new Pokedex();

const useFetchData = (id) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    pokedex
      .getPokemonByName(id)
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, [id]);
  return { data, isLoading, error };
};
export default useFetchData;
