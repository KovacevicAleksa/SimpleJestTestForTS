import { isEven } from "../main";

describe("isEven", () => {
  const testCases = [
    { input: 2, expected: true },
    { input: 3, expected: false },
    { input: -1, expected: false },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`isEven(${input}) should return ${expected}`, () => {
      expect(isEven(input)).toBe(expected);
    });
  });
});
