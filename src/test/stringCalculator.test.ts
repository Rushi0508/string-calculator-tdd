import { StringCalculator } from "../main/stringCalculator";

describe("String Calculator", () => {
  it("should return 0 when given an empty string", () => {
    expect(StringCalculator.Add("")).toBe(0);
  });

  it("should return the number when given a single number", () => {
    expect(StringCalculator.Add("1")).toBe(1);
    expect(StringCalculator.Add("2")).toBe(2);
  });
});
