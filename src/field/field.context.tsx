import { createContext, createMemo, createSignal, createUniqueId, useContext } from "solid-js";
import { FieldContextValue, FieldProviderProps } from "./field.types";
import { getMessageIds, isError, Message } from "../utils/message";
import { noop, noopAccessor } from "../utils/noop";

const defaultValue: FieldContextValue = {
  fieldId: undefined,
  error: noopAccessor(false),
  ariaDescribedBy: noopAccessor(undefined),
  ariaErrorMessage: noopAccessor(undefined),
  setMessage: noop,
};

const FieldContext = createContext(defaultValue, {});

export const useFieldContext = () => {
  return useContext(FieldContext);
};

export const FieldProvider = (props: FieldProviderProps) => {
  const fieldId = createUniqueId();

  const [messages, setMessages] = createSignal<Message[]>([]);

  const error = createMemo(() => {
    return props.error;
  });

  const ariaDescribedBy = createMemo(() => {
    return getMessageIds(messages());
  });

  const ariaErrorMessage = createMemo(() => {
    return getMessageIds(messages().filter(isError));
  });

  const setMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <FieldContext.Provider
      value={{
        fieldId,
        error,
        setMessage,
        ariaDescribedBy,
        ariaErrorMessage,
      }}
    >
      {props.children}
    </FieldContext.Provider>
  );
};
