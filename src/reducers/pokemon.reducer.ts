import { PokemonStructure } from "../types/pokemonCard";
import { PokemonAction } from "./action.creators";
import { pokemonActionTypes } from "./action.types";

export function pokemonReducer(
    state: Array<PokemonStructure>,
    action: PokemonAction
): Array<PokemonStructure> {
    switch (action.type) {
        case pokemonActionTypes.load:
            console.log("load")
            const loadedPokemons = action.payload as Array<PokemonStructure>;
            return loadedPokemons;        
        default:
            return [...state];
    }
}
