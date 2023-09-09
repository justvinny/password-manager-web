export const getValidStringElseDefault = (text?: string) =>
  text !== undefined && text.length > 0 ? ` ${text}` : "";
