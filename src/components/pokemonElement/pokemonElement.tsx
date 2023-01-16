import { FavoritesContext } from '../../context/favorites.context';
import { PokemonStructure } from '../../types/pokemonCard';
import { useContext } from 'react';

export function PokemonElement({
    pokemon,
    openModal,
}: {
    pokemon: PokemonStructure;
    openModal: (pokemon: PokemonStructure) => void;
}) {
    const { handleAdd, handleDelete } = useContext(FavoritesContext);

    const addToFavorites = () => {
        pokemon.isFavorites = true;
        handleAdd(pokemon);
    };

    const removeFromFavorites = () => {
        pokemon.isFavorites = false;
        handleDelete(pokemon.id);
    };

    return (
        <li className="item-card" id={`id_${pokemon.id}`}>
            <img
                src={pokemon.sprites.other['official-artwork'].front_default}
                alt={pokemon.name}
                onClick={() => {
                    openModal(pokemon);
                }}
            />
            <p>nº {pokemon.id}</p>
            <h4>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h4>
            {pokemon.isFavorites ? (
                <button
                    className="removeFavorites"
                    onClick={removeFromFavorites}
                ></button>
            ) : (
                <button
                    className="addFavorites"
                    onClick={addToFavorites}
                ></button>
            )}
        </li>
    );
}
