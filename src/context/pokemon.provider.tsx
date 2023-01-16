import { useMemo } from 'react';
import { usePokemons } from '../hooks/use.pokemon';
import { PokemonContext } from './pokemon.context';

export function PokemonContextProvider({
    children,
}: {
    children: JSX.Element;
}) {
    const { pokemons, handleLoad, previousURl, nextUrl, totPokemons } =
        usePokemons();

    const context = useMemo(
        () => ({
            pokemons,
            handleLoad,
            previousURl,
            nextUrl,
            totPokemons,
        }),
        [pokemons, handleLoad, previousURl, nextUrl, totPokemons]
    );

    return (
        <PokemonContext.Provider value={context}>
            {children}
        </PokemonContext.Provider>
    );
}
