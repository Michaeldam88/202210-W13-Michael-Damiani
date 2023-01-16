import { FavoritesContextProvider } from '../../context/favorites.provider';
import { PokemonContextProvider } from '../../context/pokemon.provider';
import { Layout } from '../layout/layout';
import { AppRoutes } from '../routes/app.routes';

export function App() {
    return (
        <>
            <Layout>
                <FavoritesContextProvider>
                    <PokemonContextProvider>
                        <AppRoutes></AppRoutes>
                    </PokemonContextProvider>
                </FavoritesContextProvider>
            </Layout>
        </>
    );
}
