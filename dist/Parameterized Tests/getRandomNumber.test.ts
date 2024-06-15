import { getRandomNumber } from "../main.ts";

describe("getRandomNumber function", () => {
  test.each([
    [1, 10],
    [0, 100],
  ])("Generates number between %p and %p", (min, max) => {
    const randomNumber = getRandomNumber(min, max);
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });
});
