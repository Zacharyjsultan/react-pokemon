import { useEffect, useState } from 'react';
import { fetchTypes } from '../services/pokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const loadTypeList = async () => {
      try {
        const data = await fetchTypes();
        setTypes(data.map((type) => type.type));
      } catch (e) {
        console.error(e);
      }
    };
    loadTypeList();
  }, []);
  return { pokemon, setPokemon, types };
}