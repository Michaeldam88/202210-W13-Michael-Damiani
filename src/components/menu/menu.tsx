import { Link } from 'react-router-dom';
import { PokemonContextProvider } from '../../context/pokemon.provider';

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
                    <Link to={'/favorites'}>{'Favorites'}</Link>
                </li>
            </ul>
        </nav>
    );
}
