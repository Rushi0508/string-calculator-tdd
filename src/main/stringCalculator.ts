export class StringCalculator {
  static add(numbers: string): number {
    let result = 0;
    let newLine = "\n";
    let delimiters: string[] = [","];
    let newLineDelimiter = "//";
    let negativeNumbers: number[] = [];
    let maxAllowedNumber: number = 1000;

    const lines: string[] = numbers.split(newLine);

    for (const line of lines) {
      if (line.startsWith(newLineDelimiter)) {
        const delimiterPart = line.substring(newLineDelimiter.length);
        if (delimiterPart.startsWith("[")) {
          const delimiterPattern = /\[([^\]]+)\]/g;
          let match;
          delimiters = [];

          while ((match = delimiterPattern.exec(delimiterPart)) !== null) {
            delimiters.push(match[1]);
          }
        } else {
          delimiters = [delimiterPart];
        }
        continue;
      }

      for (const delimiter of delimiters) {
        if (line.endsWith(delimiter)) {
          throw new Error("Invalid input!");
        }
      }

      let lineNumbers = [line];
      delimiters.forEach((delimiter) => {
        lineNumbers = lineNumbers.flatMap((part) => part.split(delimiter));
      });

      for (const lineNumber of lineNumbers) {
        let num = Number(lineNumber);
        if (lineNumber.startsWith("-")) {
          negativeNumbers.push(num);
          continue;
        } else if (num <= maxAllowedNumber) {
          result += num;
        }
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
