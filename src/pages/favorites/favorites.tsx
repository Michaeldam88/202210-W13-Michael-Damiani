import { useContext } from 'react';
import { PokemonElement } from '../../components/pokemonElement/pokemonElement';
import { PokemonContext } from '../../context/pokemon.context';

export function Favorites() {

    const { pokemons } = useContext(PokemonContext);
    
    return (
        <main>
            <div className="home-header">
                <h2>Pokemon Favoritos</h2>
                <h3>Guardados 0</h3>
            </div>
            <ul className="favorites__list">
                {pokemons
                    .filter((el) => el.isFavorites)
                    .map((element) => (
                        <PokemonElement key={element.id} pokemon={element} />
                    ))}
            </ul>
            <div className="change-page">
                <button id="previous">Previous</button>
                <button id="next">Next</button>
            </div>
        </main>
    );
}
