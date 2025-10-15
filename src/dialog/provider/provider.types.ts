import { ParentProps } from "solid-js";
import { OnBeforeClose, OnOpenChange } from "../dialog.types";

export type DialogProviderProps = ParentProps & {
  isOpen?: boolean;
  onOpenChange?: OnOpenChange;
  onBeforeClose?: OnBeforeClose;
};
