/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { PokemonStructure } from '../types/pokemonCard';

export interface PokemonContextStructure {
    pokemons: Array<PokemonStructure>;
    handleLoad: () => Promise<void>;
    previousURl: string;
    nextUrl: string;
    totPokemons: number;
}


export const initialContext: PokemonContextStructure = {
    previousURl:"",
    nextUrl:"",
    totPokemons:0,
    pokemons: [],
    handleLoad: async () => {},    
};

export const PokemonContext = createContext(initialContext);
