export type Repository<T> = {
    [functName: string]: () => T;
};
