import { PokemonStructure } from '../../types/pokemonCard';

export function PokemonDetail({
    pokemon,
    closeModal,
}: {
    pokemon: PokemonStructure | null;
    closeModal: () => void;
}) {
    return (
        <div className="modal-container" onClick={closeModal}>
            <div className="modal">
                <div>
                    <img
                        src={
                            pokemon?.sprites.other['official-artwork']
                                .front_default
                        }
                        alt={pokemon?.name}
                    />
                    <p>nº {pokemon?.id}</p>
                    <h4>
                        {pokemon?.name.length
                            ? pokemon?.name[0]?.toUpperCase() +
                              pokemon?.name?.substring(1)
                            : null}
                    </h4>
                    <button className="addFavorites"></button>
                </div>
                <div className="modal-details">
                    <ul>
                        <li>
                            Height:{' '}
                            {pokemon?.height
                                ? (pokemon?.height * 0.1).toFixed(1)
                                : null}{' '}
                            m
                        </li>
                        <li>Weight: {pokemon?.weight} Kg</li>
                        <li>Type: {pokemon?.types[0].type.name}</li>
                        <li>ETC... </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
