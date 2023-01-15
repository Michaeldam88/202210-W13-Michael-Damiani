import { PokemonStructure } from "../../types/pokemonCard";


export function PokemonElement({pokemon}:{pokemon:PokemonStructure}) {
    

    return (
        <li className="item-card" id={`id_${pokemon.id}`}>
            <img src={pokemon.imgUrl} alt={pokemon.name} />
            <p>nº ${pokemon.id}</p>
            <h4>
                ${pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
            </h4>
            <button className="addFavorites"></button>
        </li>
    );
}
