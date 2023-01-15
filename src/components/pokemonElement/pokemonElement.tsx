import { PokemonStructure } from "../../types/pokemonCard";


export function PokemonElement({pokemon}:{pokemon:PokemonStructure}) {

    const openDetail = () =>{
        console.log("open")
    }
    
    return (
        <li className="item-card" id={`id_${pokemon.id}`} onClick={openDetail}>
            <img
                src={pokemon.sprites.other['official-artwork'].front_default}
                alt={pokemon.name}
            />
            <p>nº {pokemon.id}</p>
            <h4>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h4>
            <button className="addFavorites"></button>
        </li>
    );
}
