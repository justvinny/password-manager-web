import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SaveAccount from "@/app/save-account/page";

describe("SaveAccount Component", () => {
  it("renders without errors", () => {
    render(<SaveAccount />);
  });

  it("displays error message when fields are empty", () => {
    // Arrange
    const { getByText, getByRole } = render(<SaveAccount />);
    const saveButton = getByRole("button", { name: /Save Account/i });

    // Act
    fireEvent.click(saveButton);

    // Assert
    expect(getByText("All fields must not be empty.")).toBeInTheDocument();
  });

  it("displays error message when passwords do not match", () => {
    // Arrange
    const { getByText, getByPlaceholderText, getByRole } = render(
      <SaveAccount />
    );
    const platformInput = getByPlaceholderText("Platform");
    const usernameInput = getByPlaceholderText("Username");
    const passwordInput = getByPlaceholderText("Password");
    const repeatPasswordInput = getByPlaceholderText("Repeat Password");
    const saveButton = getByRole("button", { name: /Save Account/i });

    // Act
    fireEvent.change(platformInput, { target: { value: "TestPlatform" } });
    fireEvent.change(usernameInput, { target: { value: "TestUsername" } });
    fireEvent.change(passwordInput, { target: { value: "Password123" } });
    fireEvent.change(repeatPasswordInput, {
      target: { value: "MismatchedPassword" },
    });
    fireEvent.click(saveButton);

    // Assert
    expect(getByText("Passwords do not match.")).toBeInTheDocument();
  });

  it('enables the "Save Account" button when inputs are valid', () => {
    // Arrange
    const { getByPlaceholderText, getByRole } = render(<SaveAccount />);
    const platformInput = getByPlaceholderText("Platform");
    const usernameInput = getByPlaceholderText("Username");
    const passwordInput = getByPlaceholderText("Password");
    const repeatPasswordInput = getByPlaceholderText("Repeat Password");
    const saveButton = getByRole("button", { name: /Save Account/i });

    // Act
    fireEvent.change(platformInput, { target: { value: "TestPlatform" } });
    fireEvent.change(usernameInput, { target: { value: "TestUsername" } });
    fireEvent.change(passwordInput, { target: { value: "Password123" } });
    fireEvent.change(repeatPasswordInput, { target: { value: "Password123" } });

    // Assert
    expect(saveButton).toBeEnabled();
  });
});
