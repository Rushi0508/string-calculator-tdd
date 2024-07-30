export class StringCalculator {
  static add(numbers: string): number {
    let result = 0;
    let newLine = "\n";
    let delimiter = ",";
    let newLineDelimiter = "//";
    let negativeNumbers: number[] = [];

    const lines: string[] = numbers.split(newLine);

    for (const line of lines) {
      if (line.startsWith(newLineDelimiter)) {
        delimiter = line.substring(newLineDelimiter.length);
        continue;
      }

      if (line.endsWith(delimiter)) {
        throw new Error("Invalid input!");
      }

      const lineNumbers = line.split(delimiter);

      for (const lineNumber of lineNumbers) {
        if (lineNumber.startsWith("-")) {
          negativeNumbers.push(Number(lineNumber));
          continue;
        }

        result += Number(lineNumber);
      }
    }

    if (negativeNumbers.length > 0) {
      throw new Error(
        `negative numbers not allowed ${negativeNumbers.join(", ")}`
      );
    }

    return result;
  }
}
