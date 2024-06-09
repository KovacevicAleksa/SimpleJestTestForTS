import { ConcatStrings } from "../main.ts";

describe("ConcatStrings function", () => {
  test.each([
    ["Hello", "World", "HelloWorld"],
    ["Open", "AI", "OpenAI"],
  ])("Concat %s and %s in %s", (a, b, expected) => {
    expect(ConcatStrings(a, b)).toBe(expected);
  });
});
