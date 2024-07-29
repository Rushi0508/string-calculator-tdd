import { StringCalculator } from "../main/stringCalculator";

describe("String Calculator", () => {
  it("should return 0 when given an empty string", () => {
    expect(StringCalculator.add("")).toBe(0);
  });
});
