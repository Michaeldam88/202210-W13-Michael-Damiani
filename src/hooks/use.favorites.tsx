import { useCallback, useMemo, useReducer } from 'react';
import { PokemonStructure } from '../types/pokemonCard';
import { PokemonRepo } from '../services/repository/pokemon.repo';
import { favoritesReducer } from '../reducers/favorites.reducer';
import { favoritesAddCreator, favoritesDeleteCreator, favoritesLoadCreator, favoritesUpdateCreator } from '../reducers/action.creators';

export type UseFavorites = {
    favorites: Array<PokemonStructure>;
    handleLoad: () => Promise<void>;
    handleAdd: (pokemonData: PokemonStructure) => Promise<void>;
    handleDelete: (id: PokemonStructure['id']) => Promise<void>;
    handleUpdate: (pokemon: Partial<PokemonStructure>) => Promise<void>;
};

export function useFavorites(): UseFavorites {
    const repo = useMemo(() => new PokemonRepo(), []);
    const initialState: Array<PokemonStructure> = [];

    const [favorites, dispatch] = useReducer(favoritesReducer, initialState);

    const handleLoad = useCallback(async () => {
        const favoritesList = await repo.load();
        dispatch(favoritesLoadCreator(favoritesList));
    }, [repo]);

    const handleAdd = async (pokemonData: PokemonStructure) => {
        const newFavorites = await repo.create(pokemonData);
        dispatch(favoritesAddCreator(newFavorites));
        
    };

    const handleUpdate = async (pokemon: Partial<PokemonStructure>) => {
        const updatedFavorites = await repo.update(pokemon);
        dispatch(favoritesUpdateCreator(updatedFavorites));
        
    };

    const handleDelete = async (id: PokemonStructure['id']) => {
        const elementToRemove = await repo.delete(id);
        dispatch(favoritesDeleteCreator(elementToRemove));
        
    };

    return {
        favorites,
        handleLoad,
        handleAdd,
        handleDelete,
        handleUpdate,
    };
}
