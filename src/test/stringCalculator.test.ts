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

  it("should return the sum of multiple numbers when given multiple numbers with new line delimiter", () => {
    expect(StringCalculator.add("1\n2,3")).toBe(6);
    expect(StringCalculator.add("20\n10\n30\n40\n0\n12\n23\n45")).toBe(180);
  });

  it("should throw an error when given a number with a comma at the end", () => {
    expect(() => StringCalculator.add("1,")).toThrow("Invalid input!");
    expect(() => StringCalculator.add("1,\n2,\n3")).toThrow("Invalid input!");
  });

  it("should return the sum of multiple numbers when given multiple numbers with a custom delimiter", () => {
    expect(StringCalculator.add("//;\n1;2")).toBe(3);
    expect(StringCalculator.add("//|\n1|2|3")).toBe(6);
    expect(StringCalculator.add("//sep\n2sep3")).toBe(5);
  });

  it("should throw an exception when found a negative number", () => {
    expect(() => StringCalculator.add("1,-2")).toThrow(
      "negative numbers not allowed -2"
    );
    expect(() => StringCalculator.add("1,-2,-3")).toThrow(
      "negative numbers not allowed -2, -3"
    );
    expect(() => StringCalculator.add("//sep\n2sep-3sep-1")).toThrow(
      "negative numbers not allowed -3, -1"
    );
  });

  it("should ignore numbers greater than 1000", () => {
    expect(StringCalculator.add("1001,2")).toBe(2);
    expect(StringCalculator.add("1000,2")).toBe(1002);
  });
});
