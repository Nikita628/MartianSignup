export function combine(...values: (string | undefined)[]) {
  return values.filter((v) => v).join(" ");
}
