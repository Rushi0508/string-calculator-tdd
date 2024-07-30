import { StringCalculator } from "../main/stringCalculator";

describe("String Calculator", () => {
  it("should return 0 when given an empty string", () => {
    expect(StringCalculator.add("")).toBe(0);
  });

  it("should return the number when given a single number", () => {
    expect(StringCalculator.add("1")).toBe(1);
    expect(StringCalculator.add("2")).toBe(2);
  });

  it("should return the sum of two numbers when given two numbers", () => {
    expect(StringCalculator.add("1,2")).toBe(3);
    expect(StringCalculator.add("1,0")).toBe(1);
  });

  it("should return the sum of multiple numbers when given multiple numbers", () => {
    expect(StringCalculator.add("1,2,3")).toBe(6);
    expect(StringCalculator.add("20,10,30,40,0,12,23,45")).toBe(180);
  });
});
