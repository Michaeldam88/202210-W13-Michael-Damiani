import { PokemonStructure } from "../../types/pokemonCard";

export class GetPokemons {
    constructor(private url = 'https://pokeapi.co/api/v2/pokemon') {}

    async load(): Promise<PokemonStructure[]> {
        const resp = await fetch(this.url);
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
            console.log(resp)
        return await resp.json();
    }
} 
