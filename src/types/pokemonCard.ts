export interface PokemonStructure {
    id: number;
    name: string;
    imgUrl: string;
    isFavorites: boolean;
    sprites: {
        other: { 'official-artwork': { front_default: string } };
    };
}
