/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { PokemonStructure } from '../types/pokemonCard';

export interface FavoritesContextStructure {
    favorites: Array<PokemonStructure>;
    handleLoad: () => Promise<void>;
    handleAdd: (pokemonData: PokemonStructure) => Promise<void>;
    handleDelete: (id: PokemonStructure['id']) => Promise<void>;
    handleUpdate: (robot: Partial<PokemonStructure>) => Promise<void>;
}

export const initialContext: FavoritesContextStructure = {
    favorites: [],
    handleLoad: async () => {},
    handleAdd: async (pokemon: PokemonStructure) => {},
    handleDelete: async (id: number) => {},
    handleUpdate: async (pokemonPayload: Partial<PokemonStructure>) => {},
};

export const FavoritesContext = createContext(initialContext);
