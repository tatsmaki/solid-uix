import { createEffect, createMemo, createSignal } from "solid-js";
import { DialogProviderProps } from "./provider.types";
import { DialogContext } from "./context";
import { SetDialogRef } from "./context.types";

export const DialogProvider = (props: DialogProviderProps) => {
  let dialogRef: HTMLDialogElement;

  const setDialogRef: SetDialogRef = (element) => {
    dialogRef = element;
  };

  const [ariaLabelledBy, setTitleId] = createSignal<string | undefined>();
  const [ariaDescribedBy, setDescriptionId] = createSignal<string | undefined>();

  const isOpen = createMemo(() => {
    return props.isOpen;
  });

  const openDialog = () => {
    dialogRef?.showModal();
    props.onOpenChange?.(true);
  };

  const closeDialog = () => {
    dialogRef?.requestClose();
  };

  createEffect(() => {
    if (isOpen()) {
      openDialog();
    } else {
      closeDialog();
    }
  });

  return (
    <DialogContext.Provider
      value={{
        ariaLabelledBy,
        ariaDescribedBy,
        setDialogRef,
        setTitleId,
        setDescriptionId,
        openDialog,
        closeDialog,
        onOpenChange: props.onOpenChange,
        onBeforeClose: props.onBeforeClose,
      }}
    >
      {props.children}
    </DialogContext.Provider>
  );
};
