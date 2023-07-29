export type ConsoleStyle = string;

export type LogType = "ERROR" | "GENERAL" | "HEADER" | "HIDDEN";

export type LogReturnType = "FILE_WRITE_ERROR" | "SUCCESS_LOG" | "ERROR_LOG";

export type LogFormat = ".log" | ".csv";

export type FilePath = {
  dir: string;
  fileName: string;
  fileExt: LogFormat;
};

export const textStyles = {
  Reset: "\x1b[0m" as ConsoleStyle,
  Bright: "\x1b[1m" as ConsoleStyle,
  Dim: "\x1b[2m" as ConsoleStyle,
  Underscore: "\x1b[4m" as ConsoleStyle,
  Blink: "\x1b[5m" as ConsoleStyle,
  Reverse: "\x1b[7m" as ConsoleStyle,
  Hidden: "\x1b[8m" as ConsoleStyle,
  NewLine: "\n" as ConsoleStyle,

  FgBlack: "\x1b[30m" as ConsoleStyle,
  FgRed: "\x1b[31m" as ConsoleStyle,
  FgGreen: "\x1b[32m" as ConsoleStyle,
  FgYellow: "\x1b[33m" as ConsoleStyle,
  FgBlue: "\x1b[34m" as ConsoleStyle,
  FgMagenta: "\x1b[35m" as ConsoleStyle,
  FgCyan: "\x1b[36m" as ConsoleStyle,
  FgWhite: "\x1b[37m" as ConsoleStyle,
  FgGray: "\x1b[90m" as ConsoleStyle,

  BgBlack: "\x1b[40m" as ConsoleStyle,
  BgRed: "\x1b[41m" as ConsoleStyle,
  BgGreen: "\x1b[42m" as ConsoleStyle,
  BgYellow: "\x1b[43m" as ConsoleStyle,
  BgBlue: "\x1b[44m" as ConsoleStyle,
  BgMagenta: "\x1b[45m" as ConsoleStyle,
  BgCyan: "\x1b[46m" as ConsoleStyle,
  BgWhite: "\x1b[47m" as ConsoleStyle,
  BgGray: "\x1b[100m" as ConsoleStyle,
};
