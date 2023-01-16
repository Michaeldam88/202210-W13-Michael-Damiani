import { useMemo } from 'react';
import { useFavorites } from '../hooks/use.favorites';
import { FavoritesContext } from './favorites.context';

export function FavoritesContextProvider({
    children,
}: {
    children: JSX.Element;
}) {
    const { favorites, handleLoad, handleAdd, handleDelete, handleUpdate } =
        useFavorites();

    const context = useMemo(
        () => ({
            favorites,
            handleAdd,
            handleDelete,
            handleLoad,
            handleUpdate,
        }),
        [favorites, handleAdd, handleDelete, handleLoad, handleUpdate]
    );

    return (
        <FavoritesContext.Provider value={context}>
            {children}
        </FavoritesContext.Provider>
    );
}
