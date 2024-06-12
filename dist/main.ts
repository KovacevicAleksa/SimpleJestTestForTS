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
export function sortObjectsByPrice(
  a: { price: number }[]
): { price: number }[] {
  return a.sort((obj1, obj2) => obj1.price - obj2.price);
}
export function ConcatArrayNumbers(
  a: Array<number>,
  b: Array<number>
): Array<number> {
  return a.concat(b);
}
interface CatFact {
  fact: string;
  length: number;
}

export async function fetchData(): Promise<CatFact> {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  return data as CatFact;
}
