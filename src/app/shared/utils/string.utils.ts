
export function getShortText(text: string, max: number = 30): string {
  return text.length > max ? text.substr(0, max) + '...' : text;
}
