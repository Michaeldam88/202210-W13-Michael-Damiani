import { useCallback, useMemo, useReducer, useState } from 'react';
import { GetPokemons } from '../services/getPokemons/getPokemons';
import { PokemonStructure } from '../types/pokemonCard';

import { pokemonReducer } from '../reducers/pokemon.reducer';
import { pokemonLoadCreator } from '../reducers/action.creators';

export type UsePokemons = {
    pokemons: Array<PokemonStructure>;

    totPokemons: number;
    handleLoad: () => Promise<void>;
    handleNext: () => Promise<void>;
    handlePrevious: () => Promise<void>;
};

export function usePokemons(): UsePokemons {
    const pokemonApi = useMemo(() => new GetPokemons(), []);
    const initialState: Array<PokemonStructure> = [];

    const [pokemons, dispatch] = useReducer(pokemonReducer, initialState);
    const [totPokemons, setTotPokemons] = useState(0);

    const handleLoad = useCallback(async () => {
        const pokemonsData = await pokemonApi.loadPokemons();
        const data = await pokemonApi.getGeneralInfo();        
        setTotPokemons(data.count);
        dispatch(pokemonLoadCreator(pokemonsData));
    }, [pokemonApi]);

    const handleNext = useCallback(async () => {        
        const data = await pokemonApi.getGeneralInfo();
        const pokemonsData = await pokemonApi.loadPokemons(data.next);        
        dispatch(pokemonLoadCreator(pokemonsData));
    }, [pokemonApi]);

    const handlePrevious = useCallback(async () => {
        const data = await pokemonApi.getGeneralInfo();
        const pokemonsData = await pokemonApi.loadPokemons(data.previous);        
        dispatch(pokemonLoadCreator(pokemonsData));
    }, [pokemonApi]);

    return {
        pokemons,
        handleLoad,
        handleNext,
        handlePrevious,
        totPokemons,
    };
}
