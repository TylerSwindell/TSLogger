type ConsoleStyle = string;
type LogType = "ERROR" | "GENERAL" | "HEADER" | "HIDDEN";
type LogReturnType = "FILE_WRITE_ERROR" | "SUCCESS_LOG" | "ERROR_LOG";
type LogFormat = ".log" | ".csv";
type FilePath = {
    dir: string;
    fileName: string;
    fileExt: LogFormat;
};

declare class Logger {
    private constructor();
    private static _paths;
    private static generatePath;
    private static generateLogMessage;
    static print(msg: string, type: LogType, options?: {
        style?: ConsoleStyle;
    }): LogReturnType;
    static set paths(paths: {
        general?: FilePath;
        error?: FilePath;
    });
    static get paths(): {
        general?: FilePath;
        error?: FilePath;
    };
}

declare const textStyles: {
    Reset: string;
    Bright: string;
    Dim: string;
    Underscore: string;
    Blink: string;
    Reverse: string;
    Hidden: string;
    NewLine: string;
    FgBlack: string;
    FgRed: string;
    FgGreen: string;
    FgYellow: string;
    FgBlue: string;
    FgMagenta: string;
    FgCyan: string;
    FgWhite: string;
    FgGray: string;
    BgBlack: string;
    BgRed: string;
    BgGreen: string;
    BgYellow: string;
    BgBlue: string;
    BgMagenta: string;
    BgCyan: string;
    BgWhite: string;
    BgGray: string;
};

export { ConsoleStyle, FilePath, LogFormat, LogReturnType, LogType, Logger as default, textStyles };
