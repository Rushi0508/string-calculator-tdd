export class StringCalculator {
  static add(numbers: string): number {
    let result = 0;
    let separator = ",";
    let newLine = "\n";
    const lines: string[] = numbers.split(newLine);
    for (const line of lines) {
      if (line.endsWith(separator)) {
        throw new Error("Invalid input!");
      }
      const lineNumbers = line.split(separator);
      for (const lineNumber of lineNumbers) {
        result += Number(lineNumber);
      }
    }
    return result;
  }
}
