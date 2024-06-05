import { getNumber } from "./main";

describe("getNumber function", () => {
  test("adds 1 + 3 to equal 4", () => {
    expect(getNumber(1, 3)).toBe(4);
  });
});
