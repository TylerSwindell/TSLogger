"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default,
  textStyles: () => textStyles
});
module.exports = __toCommonJS(src_exports);

// src/Logger.ts
var import_fs = __toESM(require("fs"));

// src/textStyles.ts
var textStyles = {
  Reset: "\x1B[0m",
  Bright: "\x1B[1m",
  Dim: "\x1B[2m",
  Underscore: "\x1B[4m",
  Blink: "\x1B[5m",
  Reverse: "\x1B[7m",
  Hidden: "\x1B[8m",
  NewLine: "\n",
  FgBlack: "\x1B[30m",
  FgRed: "\x1B[31m",
  FgGreen: "\x1B[32m",
  FgYellow: "\x1B[33m",
  FgBlue: "\x1B[34m",
  FgMagenta: "\x1B[35m",
  FgCyan: "\x1B[36m",
  FgWhite: "\x1B[37m",
  FgGray: "\x1B[90m",
  BgBlack: "\x1B[40m",
  BgRed: "\x1B[41m",
  BgGreen: "\x1B[42m",
  BgYellow: "\x1B[43m",
  BgBlue: "\x1B[44m",
  BgMagenta: "\x1B[45m",
  BgCyan: "\x1B[46m",
  BgWhite: "\x1B[47m",
  BgGray: "\x1B[100m"
};

// src/Logger.ts
var LoggerOptions = {
  delimeter: ",",
  spaceKey: " "
};
var Logger = class {
  constructor() {
  }
  // Function to print log messages
  static print(msg, type, options) {
    let returnCode = "SUCCESS_LOG";
    const logMsg = this.generateLogMessage(msg);
    const headerStyle = (options == null ? void 0 : options.style) || textStyles.BgGreen + textStyles.FgBlack, gneralStyle = (options == null ? void 0 : options.style) || textStyles.FgCyan;
    const headerText = headerStyle + msg + textStyles.Reset, generalText = gneralStyle + msg + textStyles.Reset;
    switch (type) {
      case "ERROR":
        try {
          const errorLogPath = this.generatePath(this._paths.error);
          import_fs.default.appendFileSync(errorLogPath, logMsg);
          console.error(
            ((options == null ? void 0 : options.style) || textStyles.BgRed + textStyles.FgBlack) + msg + textStyles.Reset
          );
          returnCode = "ERROR_LOG";
        } catch (err) {
          console.error(err);
          returnCode = "FILE_WRITE_ERROR";
        }
        break;
      default:
        const generalLogPath = this.generatePath(this._paths.general), generalLogDir = this._paths.general.dir;
        if (import_fs.default.existsSync(generalLogDir))
          import_fs.default.appendFileSync(generalLogPath, logMsg);
        else {
          import_fs.default.mkdirSync(this._paths.general.dir);
          import_fs.default.appendFileSync(generalLogPath, logMsg);
        }
        const consoleOutput = type === "GENERAL" ? generalText : headerText;
        console.log(consoleOutput);
    }
    return returnCode;
  }
  // Setter for updating the log file paths
  static set paths(paths) {
    if (paths.general !== void 0)
      this._paths.general = paths.general;
    if (paths.error !== void 0)
      this._paths.error = paths.error;
  }
  // Getter for accessing the log file paths
  static get paths() {
    return this._paths;
  }
};
// Object to store log file paths
Logger._paths = {
  general: {
    dir: "logs/",
    fileName: "general",
    fileExt: ".log"
  },
  error: {
    dir: "logs/",
    fileName: "error",
    fileExt: ".log"
  }
};
Logger.generatePath = (fileInfo) => {
  return fileInfo.dir.concat(fileInfo.fileName).concat(fileInfo.fileExt);
};
Logger.generateLogMessage = (msg) => {
  return (/* @__PURE__ */ new Date()).toISOString() + LoggerOptions.delimeter + msg + LoggerOptions.delimeter + textStyles.NewLine;
};

// src/index.ts
var src_default = Logger;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  textStyles
});
