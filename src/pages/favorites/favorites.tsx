import { useContext, useEffect, useState } from 'react';
import { PokemonDetail } from '../../components/pokemonDetail/pokemonDetail';
import { PokemonElement } from '../../components/pokemonElement/pokemonElement';
import { FavoritesContext } from '../../context/favorites.context';
import { PokemonStructure } from '../../types/pokemonCard';

export function Favorites() {
    const { favorites, handleLoad } = useContext(FavoritesContext);

    
    const [pokemon, setPokemon] = useState<PokemonStructure | null>();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <main>
            <div className="home-header">
                <h2>Pokemon Favoritos</h2>
                <h3>Guardados {favorites.length}</h3>
            </div>
            <ul className="slot-items">
                {favorites.map((element) => (
                    <PokemonElement
                        openModal={(pokemon) => {
                            setPokemon(pokemon);
                        }}
                        key={element.id}
                        pokemon={element}
                    />
                ))}
            </ul>
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
