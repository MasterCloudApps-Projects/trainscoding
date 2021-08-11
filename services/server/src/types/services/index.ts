export type Service<T> = {
  [functName: string]: () => T;
};
