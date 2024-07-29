export class StringCalculator {
  static add(numbers: string): number {
    let result = 0;
    const values: string[] = numbers.split(",");
    let firstNum = Number(values[0]);
    result += firstNum;
    if (values[1]) {
      result += Number(values[1]);
    }
    return result;
  }
}
