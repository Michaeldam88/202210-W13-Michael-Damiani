/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { PokemonStructure } from '../types/pokemonCard';

export interface PokemonContextStructure {
    pokemons: Array<PokemonStructure>;
    handleLoad: () => Promise<void>;
    handlePrevious: () => Promise<void>;
    handleNext: () => Promise<void>;
    totPokemons: number;
}


export const initialContext: PokemonContextStructure = {
    handlePrevious: async () => {},
    handleNext: async () => {},
    totPokemons: 0,
    pokemons: [],
    handleLoad: async () => {},
};

export const PokemonContext = createContext(initialContext); 
