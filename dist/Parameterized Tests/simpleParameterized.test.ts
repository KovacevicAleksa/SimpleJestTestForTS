import { legalAge } from "../main.ts";

it.each([18, 99])("should return true when age is %i", (nb) => {
  expect(legalAge(nb)).toBe(true);
});

it.each([17, 1])("should return false when age is %i", (nb) => {
  expect(legalAge(nb)).toBe(false);
});
