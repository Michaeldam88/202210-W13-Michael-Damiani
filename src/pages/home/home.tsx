import { useContext, useEffect } from 'react';
import { PokemonElement } from '../../components/pokemonElement/pokemonElement';
import { PokemonContext } from '../../context/pokemon.context';

export function Home() {
    const { pokemons, handleLoad } = useContext(PokemonContext);


    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <main>
            <div className="home-header">
                <h2>Pokemon List</h2>
                <h3>Vistos X</h3>
            </div>
            <section className="pokemon-list">
                <ul className="slot-items">
                    {pokemons.map((element) => (
                        <PokemonElement key={element.id} pokemon={element} />
                    ))}
                </ul>
            </section>
            <div className="change-page">
                <button id="previous">Previous</button>
                <button id="next">Next</button>
            </div>
        </main>
    );
}
