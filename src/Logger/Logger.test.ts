import { describe, expect, it } from "vitest";
import Logger, { textStyles } from "../index";
import { LogType, LogReturnType } from "./@types";

describe("Whatever", () => {
  it("should pass CI", () => {
    expect(1).toBe(1);
  });
});

describe("Testing successful log file writing and log to terminal", () => {
  it("should return LogReturnType.SUCCESS_LOG => 1", () => {
    expect(Logger.print("Hello", "GENERAL")).toBe("SUCCESS_LOG");
  });
});

describe("Testing successful log file writing and ", () => {
  it("should return LogReturnType.ERROR_LOG => 2", () => {
    expect(Logger.print("Big Error", "ERROR")).toBe("ERROR_LOG");
  });
});

describe("Testing successful log file writing and ", () => {
  it("should return LogReturnType.ERROR_LOG => 2", () => {
    expect(
      Logger.print("Big Error", "ERROR", {
        style: textStyles.BgCyan + textStyles.FgRed,
      })
    ).toBe("ERROR_LOG");
  });
});
