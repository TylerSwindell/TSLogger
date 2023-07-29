import fs from "fs";
import {
  ConsoleStyle,
  LogType,
  LogReturnType,
  FilePath,
  textStyles,
} from "./@types";

let LoggerOptions = {
  delimeter: ",",
  spaceKey: " ",
};

/**
 * The Logger class provides logging functionality and manages log file paths.
 * This is a singleton class, meaning only one instance of the class can exist.
 */
class Logger {
  private constructor() {}

  /**
   * Object to store log file paths for the 'general' and 'error' logs.
   * The initial values are set using string concatenation with default log file properties.
   * @type {Object.<string, FilePath>}
   * @private
   */
  private static _paths: {
    general: FilePath;
    error: FilePath;
  } = {
    general: {
      dir: "logs/",
      fileName: "general",
      fileExt: ".log",
    },
    error: {
      dir: "logs/",
      fileName: "error",
      fileExt: ".log",
    },
  };

  /**
   * Generate a log file path based on the provided file info.
   * @param {FilePath} fileInfo - Object containing directory, filename, and file extension.
   * @returns {string} The generated log file path.
   * @private
   */
  private static generatePath = (fileInfo: FilePath): string => {
    return fileInfo.dir.concat(fileInfo.fileName).concat(fileInfo.fileExt);
  };

  /**
   * Generate a log message with a timestamp and delimiter.
   * @param {string} msg - The log message to include in the log.
   * @returns {string} The formatted log message.
   * @private
   */
  private static generateLogMessage = (msg: string): string => {
    return (
      new Date().toISOString() +
      LoggerOptions.delimeter +
      msg +
      LoggerOptions.delimeter +
      textStyles.NewLine
    );
  };

  /**
   * Print log messages to the console with the specified style or default style.
   * @param {string} msg - The log message to display on the console.
   * @param {LogType} type - The type of log ('GENERAL', 'ERROR', or 'HEADER').
   * @param {ConsoleStyle} style - Optional console style for the log message.
   * @private
   */
  private static printConsoleMessage = (
    msg: string,
    type: LogType,
    style?: ConsoleStyle
  ) => {
    const headerStyle = style || textStyles.BgGreen + textStyles.FgBlack,
      generalStyle = style || textStyles.FgCyan,
      headerText = headerStyle + msg + textStyles.Reset,
      generalText = generalStyle + msg + textStyles.Reset;

    if (type === "ERROR")
      console.error(
        (style || textStyles.BgRed + textStyles.FgBlack) +
          msg +
          textStyles.Reset
      );
    else console.log(type === "GENERAL" ? generalText : headerText);
  };

  /**
   * Write the log message to the appropriate log file based on the log type.
   * @param {string} msg - The log message to write to the log file.
   * @param {LogType} type - The type of log ('GENERAL', 'ERROR', or 'HEADER').
   * @private
   */
  private static writeLogMessage = (msg: string, type: LogType) => {
    const logMsg = this.generateLogMessage(msg),
      logPath: FilePath =
        type === "ERROR" ? this._paths.error : this._paths.general;
    fs.appendFileSync(this.generatePath(logPath), logMsg);
  };

  /**
   * Print the log message, write it to the log file, and return the log status.
   * @param {string} msg - The log message to be printed and written to the log file.
   * @param {LogType} type - The type of log ('GENERAL', 'ERROR', or 'HEADER').
   * @param {{ style?: ConsoleStyle }} options - Optional object with a 'style' property for console message styling.
   * @returns {LogReturnType} The log status indicating the success or error.
   */
  public static print(
    msg: string,
    type: LogType,
    options?: { style?: ConsoleStyle }
  ): LogReturnType {
    let returnCode: LogReturnType =
      type === "ERROR" ? "ERROR_LOG" : "SUCCESS_LOG";

    const logMsg = this.generateLogMessage(msg);

    const logDir =
      type === "ERROR" ? this._paths.error.dir : this._paths.general.dir;

    if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

    this.writeLogMessage(logMsg, type);

    this.printConsoleMessage(msg, type, options?.style);

    return returnCode;
  }

  /**
   * Setter for updating the log file paths for 'general' and 'error' logs.
   * @param {{ general?: FilePath; error?: FilePath }} paths - Object with updated log file paths.
   */
  public static set paths(paths: { general?: FilePath; error?: FilePath }) {
    if (paths.general !== undefined) this._paths.general = paths.general;

    if (paths.error !== undefined) this._paths.error = paths.error;
  }

  /**
   * Getter for accessing the current log file paths for 'general' and 'error' logs.
   * @returns {{ general: FilePath; error: FilePath }} Object containing the current log file paths.
   */
  public static get paths() {
    return this._paths;
  }
}

// Exporting the Logger class to be used by other modules.
export { Logger };
