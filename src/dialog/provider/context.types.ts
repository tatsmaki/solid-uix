import { Accessor, Setter } from "solid-js";
import { OnBeforeClose, OnOpenChange } from "../dialog.types";

export type SetDialogRef = (element: HTMLDialogElement) => void;

export type DialogContextValue = {
  setDialogRef: SetDialogRef;
  ariaLabelledBy: Accessor<string | undefined>;
  ariaDescribedBy: Accessor<string | undefined>;
  setTitleId: Setter<string | undefined>;
  setDescriptionId: Setter<string | undefined>;
  openDialog(): void;
  closeDialog(): void;
  onOpenChange?: OnOpenChange;
  onBeforeClose?: OnBeforeClose;
};
