import { children, createEffect, createUniqueId, ParentProps } from "solid-js";
import {
  DialogActionsProps,
  DialogCloseProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogProps,
  DialogTitleProps,
} from "./dialog.types";
import { cls } from "../utils/cls";
import { DialogProvider } from "./provider/provider";
import { useDialogContext } from "./provider/context";
import sx from "./dialog.module.css";

export const Dialog = (props: DialogProps) => {
  return <DialogProvider {...props}>{props.children}</DialogProvider>;
};

const Trigger = (props: ParentProps) => {
  const context = useDialogContext();
  const child = children(() => props.children);

  createEffect(() => {
    const element = child();

    if (element instanceof HTMLElement) {
      element.onclick = context.openDialog;
    }
  });

  return <>{child()}</>;
};

const Content = (props: DialogContentProps) => {
  const context = useDialogContext();

  return (
    <dialog
      {...props}
      ref={(element) => {
        props.ref = element;
        context.setDialogRef(element);
      }}
      class={cls(sx.dialog, props.class)}
      aria-labelledby={context.ariaLabelledBy()}
      aria-describedby={context.ariaDescribedBy()}
      onClose={() => context.onOpenChange?.(false)}
      onCancel={context.onBeforeClose}
    >
      {props.children}
    </dialog>
  );
};

const Title = (props: DialogTitleProps) => {
  const context = useDialogContext();
  const titleId = createUniqueId();

  context.setTitleId(titleId);

  return (
    <h2 {...props} id={titleId} class={cls(sx.title, props.class)}>
      {props.children}
    </h2>
  );
};

const Description = (props: DialogDescriptionProps) => {
  const context = useDialogContext();
  const descriptionId = createUniqueId();

  context.setDescriptionId(descriptionId);

  return (
    <p {...props} id={descriptionId} class={cls(sx.description, props.class)}>
      {props.children}
    </p>
  );
};

const Close = (props: DialogCloseProps) => {
  const context = useDialogContext();
  const child = children(() => props.children);

  createEffect(() => {
    const element = child();

    if (element instanceof HTMLElement) {
      element.onclick = context.closeDialog;
    }
  });

  return <>{child()}</>;
};

const Actions = (props: DialogActionsProps) => {
  return (
    <div {...props} class={cls(sx.actions, props.class)}>
      {props.children}
    </div>
  );
};

Dialog.Trigger = Trigger;
Dialog.Content = Content;
Dialog.Title = Title;
Dialog.Description = Description;
Dialog.Close = Close;
Dialog.Actions = Actions;
