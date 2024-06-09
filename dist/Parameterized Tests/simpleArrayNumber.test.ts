import { ConcatArrayNumbers } from "../main.ts";

describe("ConcatArrayString function", () => {
  test.each([
    [
      [1, 0],
      [3, 4],
      [1, 0, 3, 4],
    ],
    [
      [-1, 0],
      [9, 0],
      [-1, 0, 9, 0],
    ],
  ])("Concat %p and %p in %p", (a, b, expected) => {
    expect(ConcatArrayNumbers(a, b)).toEqual(expected);
  });
});
