export class StringCalculator {
  static add(numbers: string): number {
    let result = 0;
    const values: string[] = numbers.split(",");
    for (let value of values) {
      result += Number(value);
    }
    return result;
  }
}
