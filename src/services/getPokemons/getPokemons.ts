export class GetPokemons {
    constructor(private url = 'https://pokeapi.co/api/v2/pokemon') {}

    async load() {
        const resp = await (await fetch(this.url)).json();
        const urlList = await Promise.all(
            resp.results.map((e: { name: string; url: string }) => fetch(e.url))
        );

        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);

        return Promise.all(urlList.map((e) => e.json()));
    }
}
