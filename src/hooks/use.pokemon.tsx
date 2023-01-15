import { useCallback, useMemo, useReducer } from 'react';
import { GetPokemons } from '../services/getPokemons/getPokemons';
import { PokemonStructure } from '../types/pokemonCard';

import { pokemonReducer } from '../reducers/pokemon.reducer';
import { pokemonLoadCreator } from '../reducers/action.creators';

export type UsePokemons = {
    pokemons: Array<PokemonStructure>;
    handleLoad: () => Promise<void>;
};

export function usePokemons(): UsePokemons {
    const pokemonApi = useMemo(() => new GetPokemons(), []);
    const initialState: Array<PokemonStructure> = [];

    const [pokemons, dispatch] = useReducer(pokemonReducer, initialState);

    const handleLoad = useCallback(async () => {
        const data = await pokemonApi.load();
        dispatch(pokemonLoadCreator(data));
    }, [pokemonApi]);

    return {
        pokemons,
        handleLoad,
    };
}
