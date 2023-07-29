# TS-Logger-Node

ts-logger-node is a Node.js logging package that provides a simple yet powerful logging mechanism with customizable log file paths and console output styles. This package is written in TypeScript and comes with type definitions for enhanced development experience.

## Installation

To install ts-logger-node, you can use npm or yarn:

```bash
npm install  ts-logger-node
```

or

```bash
yarn add ts-logger-node
```

## Usage

### Importing the Logger

To use the logger, import it into your project:

```javascript
import Logger from "ts-logger-node";
```

### Logging Messages

You can log messages with different types: `ERROR`, `GENERAL`, or `HEADER`. The `print` method is used to log messages, and it takes three arguments:

- `msg` (string): The log message you want to write.
- `type` (LogType): The log type, which can be `"ERROR"`, `"GENERAL"`, or `"HEADER"`.
- `options` (optional object): Additional options for styling the console output. It contains a `style` property (string) that accepts ANSI escape sequences for colors and other text styles.

```javascript
Logger.print("This is an error message", "ERROR");
Logger.print("This is a general message", "GENERAL", {
  style: textStyles.FgGreen,
});
Logger.print("This is a header message", "HEADER", {
  style: textStyles.BgBlue,
});
```

### Customizing Log File Paths

By default, the log files are stored in the "logs" directory with filenames "general.log" and "error.log". You can customize these file paths using the `paths` setter:

```javascript
Logger.paths = {
  general: {
    dir: "custom-logs/",
    fileName: "custom-general",
    fileExt: ".log",
  },
  error: {
    dir: "custom-logs/",
    fileName: "custom-error",
    fileExt: ".log",
  },
};
```

### Log Return Types

The `print` method returns a `LogReturnType` that indicates the status of the log operation. The possible return types are:

- `"SUCCESS_LOG"`: The log message was successfully written to the log file and console.
- `"ERROR_LOG"`: The log message was successfully written to the error log file, and the error message was printed to the console.
- `"FILE_WRITE_ERROR"`: There was an error writing the log message to the log file.

## Available Text Styles

The package also exports a `textStyles` object, which provides a set of ANSI escape sequences for styling the console output. You can use these styles in the `options.style` property to customize the appearance of log messages.

```javascript
import Logger, { textStyles } from " ts-logger-node";

Logger.print("This text will be blue!", "GENERAL", {
  style: textStyles.FgBlue,
});
Logger.print("White text on red background!", "GENERAL", {
  styles: {
    style: textStyles.BgRed + textStyles.FgWhite,
  },
});
```

## Contributing

If you find any issues with ts-logger-node or want to contribute improvements or new features, please feel free to open an issue or submit a pull request on the GitHub repository.

## License

This package is licensed under the MIT License. See the .LICENSE file for details.
