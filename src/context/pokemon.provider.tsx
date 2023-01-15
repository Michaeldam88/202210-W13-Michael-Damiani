import { useMemo } from "react";
import { usePokemons } from "../hooks/use.pokemon";
import { PokemonContext } from "./pokemon.context";

export function PokemonContextProvider({ children }: { children: JSX.Element }) {
    const { pokemons, handleLoad } =
        usePokemons();

    const context = useMemo(
        () => ({
            pokemons,
            handleLoad,            
            
            
        }),
        [pokemons,  handleLoad, ]
    );

    return (
        <PokemonContext.Provider value={context}>
            {children}
        </PokemonContext.Provider>
    );
    }
