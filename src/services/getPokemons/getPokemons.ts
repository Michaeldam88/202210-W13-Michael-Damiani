export class GetPokemons {
    constructor(private url = 'https://pokeapi.co/api/v2/pokemon') {}

    async loadPokemons() {
        const resp = await (await fetch(this.url)).json();
        const urlList = await Promise.all(
            resp.results.map((e: { name: string; url: string }) => fetch(e.url))
        );
        return Promise.all(urlList.map((e) => e.json()));
    }

    async getGeneralInfo() {
        const resp = await (await fetch(this.url)).json();
        return resp;
    }
}
