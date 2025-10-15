import { createContext, useContext } from "solid-js";
import { noop, noopAccessor, noopSetter } from "../../utils/noop";
import { DialogContextValue } from "./context.types";

const defaultValue: DialogContextValue = {
  setDialogRef() {},
  ariaLabelledBy: noopAccessor(undefined),
  ariaDescribedBy: noopAccessor(undefined),
  setTitleId: noopSetter(),
  setDescriptionId: noopSetter(),
  openDialog: noop,
  closeDialog: noop,
  onOpenChange: noop,
  onBeforeClose: noop,
};

export const DialogContext = createContext(defaultValue);

export const useDialogContext = () => {
  return useContext(DialogContext);
};
