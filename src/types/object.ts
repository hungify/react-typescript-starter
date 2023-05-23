export type Prettify<T> = {
  [K in keyof T]: T[K];
} & NonNullable<unknown>;

export type Modify<T, R> = Omit<T, keyof R> & R;
