import { Link } from 'react-router-dom';

export function Menu() {
    return (
        <nav className="menu">
            <ul>
                <li>
                        <Link to={'/home'}>{'Home'}</Link>
                </li>

                <li>
                    
                        <Link to={'/favorites'}>{'Favorites'}</Link>
                </li>
            </ul>
        </nav>
    );
}
