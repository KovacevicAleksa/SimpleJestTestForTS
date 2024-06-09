export function getNumber(a: number, b: number): number {
  return a + b;
}
export function getString(a: string, b: string): string {
  return a + b;
}
export function legalAge(a: number): boolean {
  return a >= 18 ? true : false;
}
export function ConcatStrings(a: string, b: string): string {
  return a.concat(b);
}
export function ConcatArrayNumbers(
  a: Array<number>,
  b: Array<number>
): Array<number> {
  return a.concat(b);
}
