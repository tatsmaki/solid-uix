import { Accessor, Setter } from "solid-js";

export const noop = () => {};

export const noopAccessor = <T>(value: T): Accessor<T> => {
  return () => value;
};

export const noopSetter = <T>(): Setter<T> => {
  return (() => {}) as any;
};
