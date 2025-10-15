import { fn } from "storybook/test";
import { useArgs } from "storybook/preview-api";

import { Dialog } from "./dialog";
import { Button } from "../button/button";
import { OnBeforeClose, OnOpenChange } from "./dialog.types";

type StoryArg = {
  isOpen: boolean;
  title: string;
  description: string;
  onOpenChange: OnOpenChange;
  onBeforeClose: OnBeforeClose;
};

export default {
  title: "Data Display/Dialog",
  component: (arg: StoryArg) => {
    const [_, updateArgs] = useArgs();

    return (
      <Dialog
        isOpen={arg.isOpen}
        onOpenChange={(isOpen) => {
          updateArgs({ isOpen });
          arg.onOpenChange?.(isOpen);
        }}
        onBeforeClose={arg.onBeforeClose}
      >
        <Dialog.Trigger>
          <Button>Open Dialog</Button>
        </Dialog.Trigger>

        <Dialog.Content>
          <Dialog.Title>{arg.title}</Dialog.Title>
          <Dialog.Description>{arg.description}</Dialog.Description>
          <Dialog.Actions>
            <Button>Action</Button>
            <Dialog.Close>
              <Button variant="outlined">Close</Button>
            </Dialog.Close>
          </Dialog.Actions>
        </Dialog.Content>
      </Dialog>
    );
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    isOpen: false,
    title: "Dialog",
    description: "Description",
    onOpenChange: fn(),
  },
};

export const Default = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
          const [isOpen, setIsOpen] = createSignal(false);
            
          return (
            <Dialog isOpen={isOpen()} onOpenChange={setIsOpen}>
              <Dialog.Trigger>
                <Button>Open Dialog</Button>
              </Dialog.Trigger>

              <Dialog.Content>
                <Dialog.Title>Title</Dialog.Title>
                <Dialog.Description>Description</Dialog.Description>
                <Dialog.Actions>
                  <Button>Action</Button>
                  <Dialog.Close>
                    <Button variant="outlined">Close</Button>
                  </Dialog.Close>
                </Dialog.Actions>
              </Dialog.Content>
            </Dialog>
          );`,
      },
    },
  },
};
