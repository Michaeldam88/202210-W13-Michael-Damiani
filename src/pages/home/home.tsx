import { useContext, useEffect, useState } from 'react';
import { PokemonDetail } from '../../components/pokemonDetail/pokemonDetail';
import { PokemonElement } from '../../components/pokemonElement/pokemonElement';
import { PokemonContext } from '../../context/pokemon.context';
import { PokemonStructure } from '../../types/pokemonCard';

export function Home() {
    const { pokemons, handleLoad, totPokemons, handleNext, handlePrevious } =
        useContext(PokemonContext);

    const [pokemon, setPokemon] = useState<PokemonStructure|null>();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);    

    return (
        <main>
            <div className="home-header">
                <h2>Pokemon List</h2>
                <h3>Total {totPokemons}</h3>
            </div>
            <section className="pokemon-list">
                <ul className="slot-items">
                    {pokemons.map((element) => (
                        <PokemonElement
                            openModal={(pokemon) => {
                                setPokemon(pokemon);
                            }}
                            key={element.id}
                            pokemon={element}
                        />
                    ))}
                </ul>
            </section>
            <div className="change-page">
                <button id="previous" onClick={handlePrevious}>
                    Previous
                </button>
                <button id="next" onClick={handleNext}>
                    Next
                </button>
            </div>
            {pokemon ? (
                <PokemonDetail
                    closeModal={() => {
                        setPokemon(null);
                    }}
                    pokemon={pokemon}
                />
            ) : null}
        </main>
    );
}
