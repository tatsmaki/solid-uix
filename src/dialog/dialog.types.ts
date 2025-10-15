import { JSX, ParentProps } from "solid-js";

export type OnOpenChange = (isOpen: boolean) => void;

/**
 * Use event.preventDefault() to prevent dialog close
 * @link https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/cancel_event
 */
export type OnBeforeClose = (event: Event) => void;

export type DialogProps = ParentProps & {
  isOpen?: boolean;
  onOpenChange?: OnOpenChange;
  onBeforeClose?: OnBeforeClose;
};

export type DialogContentProps = JSX.DialogHtmlAttributes<HTMLDialogElement>;

export type DialogTitleProps = JSX.HTMLAttributes<HTMLHeadingElement>;

export type DialogDescriptionProps = JSX.HTMLAttributes<HTMLParagraphElement>;

export type DialogCloseProps = ParentProps;

export type DialogActionsProps = JSX.HTMLAttributes<HTMLDivElement>;
