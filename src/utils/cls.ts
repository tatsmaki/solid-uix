type ClassName = string | undefined | boolean;

export const cls = (...classes: ClassName[]): string => {
  return classes.filter(Boolean).join(" ");
};
