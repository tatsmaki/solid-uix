import { Accessor } from "solid-js";

export const noop = () => {};

export const noopAccessor = <T>(value: T): Accessor<T> => {
  return () => value;
};
