export function toTitleCase(input: string): string {
  return input
    .replace(/[-_.]+/g, " ") // replace -, _, . with space
    .toLowerCase() // normalize case
    .replace(/\b\w/g, (char) => char.toUpperCase()); // capitalize first letter
}
