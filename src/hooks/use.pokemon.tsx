import { useCallback, useMemo, useReducer, useState } from 'react';
import { GetPokemons } from '../services/getPokemons/getPokemons';
import { PokemonStructure } from '../types/pokemonCard';

import { pokemonReducer } from '../reducers/pokemon.reducer';
import { pokemonLoadCreator } from '../reducers/action.creators';

export type UsePokemons = {
    pokemons: Array<PokemonStructure>;
    previousURl: string;
    nextUrl: string;
    totPokemons: number;
    handleLoad: () => Promise<void>;
};

export function usePokemons(): UsePokemons {
    const pokemonApi = useMemo(() => new GetPokemons(), []);
    const initialState: Array<PokemonStructure> = [];

    const [pokemons, dispatch] = useReducer(pokemonReducer, initialState);
    const [previousURl, setPreviousURl] = useState("");
    const [nextUrl, setNextUrl] = useState("");
    const [totPokemons, setTotPokemons] = useState(0);

    const handleLoad = useCallback(async () => {
        const pokemonsData = await pokemonApi.loadPokemons();
        const data = await pokemonApi.getGeneralInfo();
        setPreviousURl(data.previous);
        setNextUrl(data.next);
        setTotPokemons(data.count);
        dispatch(pokemonLoadCreator(pokemonsData));
    }, [pokemonApi]);

    return {
        pokemons,
        handleLoad,
        previousURl,
        nextUrl,
        totPokemons,
    };
}
