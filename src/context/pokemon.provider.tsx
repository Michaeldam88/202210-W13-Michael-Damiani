import { useMemo } from 'react';
import { usePokemons } from '../hooks/use.pokemon';
import { PokemonContext } from './pokemon.context';

export function PokemonContextProvider({
    children,
}: {
    children: JSX.Element;
}) {
    const { pokemons, handleLoad, handleNext, handlePrevious, totPokemons } =
        usePokemons();

    const context = useMemo(
        () => ({
            pokemons,
            handleLoad,
            handleNext,
            handlePrevious,
            totPokemons,
        }),
        [pokemons, handleLoad, handleNext, handlePrevious, totPokemons]
    );

    return (
        <PokemonContext.Provider value={context}>
            {children}
        </PokemonContext.Provider>
    );
}
