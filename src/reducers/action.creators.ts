import { PokemonStructure } from '../types/pokemonCard';
import { pokemonActionTypes } from './action.types';

export type PokemonAction = {
    type: string;
    payload: Array<PokemonStructure> | PokemonStructure['id'];
};

export const pokemonLoadCreator = (
    payload: Array<PokemonStructure>
): PokemonAction => ({
    type: pokemonActionTypes.load,
    payload,
});

