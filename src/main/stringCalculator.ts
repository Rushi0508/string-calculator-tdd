export class StringCalculator {
  static add(numbers: string): number {
    let result = 0;
    let newLine = "\n";
    let delimiter = ",";
    let newLineDelimiter = "//";
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
        result += Number(lineNumber);
      }
    }
    return result;
  }
}
