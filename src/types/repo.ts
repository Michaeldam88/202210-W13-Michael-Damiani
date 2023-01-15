export interface Repository<T> {
    load: () => Promise<T[]>;
    queryId: (id: number) => Promise<T>;
    create: (payload: Partial<T>) => Promise<T>;
    update: (payload: Partial<T>) => Promise<T>;
    delete: (id: number) => Promise<number>;
}
