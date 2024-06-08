import { legalAge } from "../main.ts";

it.each([18, 99])("should return true when age is %i", (nb) => {
  expect(legalAge(nb)).toBe(true);
});
