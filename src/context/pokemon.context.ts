/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { PokemonStructure } from '../types/pokemonCard';

export interface PokemonContextStructure {
    pokemons: Array<PokemonStructure>;
    handleLoad: () => Promise<void>;    
}


export const initialContext: PokemonContextStructure = {
    pokemons: [],
    handleLoad: async () => {},    
};

export const PokemonContext = createContext(initialContext);
