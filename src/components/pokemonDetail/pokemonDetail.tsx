import { PokemonDetailType } from '../../types/pokemonDetail';

export function PokemonDetail({ pokemon }: { pokemon: PokemonDetailType }) {
    const closeDetail = () => {
        console.log('closed');
    };

    return (
        <div className="modal-container" onClick={closeDetail}>
            <div className="modal">
                <div>
                    <img
                        src={
                            pokemon.sprites.other['official-artwork']
                                .front_default
                        }
                        alt={pokemon.name}
                    />
                    <p>nº {pokemon.id}</p>
                    <h4>
                        {pokemon.name[0].toUpperCase() +
                            pokemon.name.substring(1)}
                    </h4>
                    <button className="addFavorites"></button>
                </div>
                <div className="modal-details">
                    <ul>
                        <li>Height: {(pokemon.height * 0.1).toFixed(1)} m</li>
                        <li>Weight: {pokemon.weight} Kg</li>
                        <li>Type: {pokemon.types[0].type.name}</li>
                        <li>ETC... </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
