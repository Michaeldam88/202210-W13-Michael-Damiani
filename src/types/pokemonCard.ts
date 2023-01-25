export interface PokemonStructure {
    id: number;
    name: string;
    imgUrl: string;
    isFavorites: boolean;
    height: number;
    weight: number;
    sprites: {
        other: { 'official-artwork': { front_default: string } };
    };
    types: {
        0: {
            type: {
                name: string;
            };
        };
    };
}
