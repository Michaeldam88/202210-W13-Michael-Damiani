import { PokemonStructure } from "../types/pokemonCard";
import { PokemonAction } from "./action.creators";
import { pokemonActionTypes } from "./action.types";

export function pokemonReducer(
    state: Array<PokemonStructure>,
    action: PokemonAction
): Array<PokemonStructure> {
    switch (action.type) {
        case pokemonActionTypes.load:
            const loadedPlaces = action.payload as Array<PokemonStructure>;
            return loadedPlaces;        
        default:
            return [...state];
    }
}
