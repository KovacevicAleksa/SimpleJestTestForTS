import { getNumber, getString, legalAge } from "./main";

describe("getNumber function", () => {
  test("adds 1 + 3 to equal 4", () => {
    expect(getNumber(1, 3)).toBe(4);
  });
});

describe("getString function", () => {
  test("xD + xD to equal xDxD", () => {
    expect(getString("xD", "xD")).toBe("xDxD");
  });
});
//parameterized
it.each([18, 99])("should return true when age is %i", (nb) => {
  expect(legalAge(nb)).toBe(true);
});
