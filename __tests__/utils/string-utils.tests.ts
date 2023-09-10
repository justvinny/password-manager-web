import { getValidStringElseDefault } from "../../utils/string-utils";

describe("getValidStringElseDefault", () => {
  it("should return an empty string when the text is undefined", () => {
    // Arrange
    const text = undefined;
    const expectedText = "";

    // Act
    const result = getValidStringElseDefault(text);

    // Assert
    expect(result).toBe(expectedText);
  });

  it("should return an empty string when the text is undefined", () => {
    // Arrange
    const text = "";
    const expectedText = "";

    // Act
    const result = getValidStringElseDefault(text);

    // Assert
    expect(result).toBe(expectedText);
  });

  it("should return a non-empty string prefixed with a space when the text is a non-empty string", () => {
    // Arrange
    const text = "someClassName";
    const expectedText = " someClassName";

    // Act
    const result = getValidStringElseDefault(text);

    // Assert
    expect(result).toBe(expectedText);
  });
});
