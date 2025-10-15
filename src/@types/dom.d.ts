declare global {
  interface HTMLDialogElement {
    requestClose(requestClose?: string): void;
  }
}

export {};
