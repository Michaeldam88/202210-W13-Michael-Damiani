import { useContext, useEffect } from 'react';
import { PokemonElement } from '../../components/pokemonElement/pokemonElement';
import { FavoritesContext } from '../../context/favorites.context';

export function Favorites() {
    const { favorites, handleLoad } = useContext(FavoritesContext);
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
                    <PokemonElement key={element.id} pokemon={element} />
                ))}
            </ul>            
        </main>
    );
}
