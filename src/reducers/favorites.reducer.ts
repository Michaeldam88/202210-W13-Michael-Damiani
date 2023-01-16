import { PokemonStructure } from '../types/pokemonCard';
import { FavoritesAction } from './action.creators';
import { favoritesActionTypes } from './action.types';

export function favoritesReducer(
    state: Array<PokemonStructure>,
    action: FavoritesAction
): Array<PokemonStructure> {
    switch (action.type) {
        case favoritesActionTypes.load:
            const loadedFavorites = action.payload as Array<PokemonStructure>;
            return loadedFavorites;

        case favoritesActionTypes.add:
            const addedFavorites = action.payload as PokemonStructure;
            return [...state, addedFavorites];
        case favoritesActionTypes.update:
            const updateFavorites = action.payload as PokemonStructure;
            return state.map((item) =>
                item.id === updateFavorites.id ? updateFavorites : item
            );
        case favoritesActionTypes.delete:
            const finalId = action.payload as PokemonStructure['id'];
            return state.filter((item) => item.id !== finalId);

        default:
            return [...state];
    }
}
