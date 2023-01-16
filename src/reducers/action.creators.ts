import { PokemonStructure } from '../types/pokemonCard';
import { favoritesActionTypes, pokemonActionTypes } from './action.types';

export type PokemonAction = {
    type: string;
    payload: Array<PokemonStructure> 
};

export const pokemonLoadCreator = (
    payload: Array<PokemonStructure>
): PokemonAction => ({
    type: pokemonActionTypes.load,
    payload,
});

export type FavoritesAction = {
    type: string;
    payload: Array<PokemonStructure> | PokemonStructure | PokemonStructure["id"];
};

export const favoritesLoadCreator = (
    payload: Array<PokemonStructure>
): FavoritesAction => ({
    type: favoritesActionTypes.load,
    payload,
});

export const favoritesAddCreator = (payload: PokemonStructure): FavoritesAction => ({
    type: favoritesActionTypes.add,
    payload,
});

export const favoritesUpdateCreator = (
    payload: PokemonStructure
): FavoritesAction => ({
    type: favoritesActionTypes.update,
    payload,
});

export const favoritesDeleteCreator = (
    payload: PokemonStructure['id']
): FavoritesAction => ({
    type: favoritesActionTypes.delete,
    payload,
});

