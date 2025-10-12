export type MessageLevel = "info" | "warning" | "error";

export type Message = {
  level: MessageLevel;
  id: string;
};

export const isError = (message: Message) => {
  return message.level === "error";
};

export const getMessageIds = (messages: Message[]) => {
  if (!messages.length) {
    return undefined;
  }

  return messages.map((message) => message.id).join(" ");
};
