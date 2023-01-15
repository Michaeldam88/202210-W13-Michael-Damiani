import { Link } from 'react-router-dom';
import { PokemonContextProvider } from '../../context/pokemon.provider';
import { FavoritesContextProvider } from '../../context/favorites.provider';

export function Menu() {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <PokemonContextProvider>
                        <Link to={'/home'}>{'Home'}</Link>
                    </PokemonContextProvider>
                </li>

                <li>
                    <FavoritesContextProvider>
                        <Link to={'/favorites'}>{'Favorites'}</Link>
                    </FavoritesContextProvider>
                </li>
            </ul>
        </nav>
    );
}
