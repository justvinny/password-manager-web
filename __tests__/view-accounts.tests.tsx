import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ViewAccounts from "@/app/view-accounts/view-accounts";

const renderViewAccounts = () => {
  return render(<ViewAccounts />);
};

describe("ViewAccounts Component", () => {
  let clipboard;

  it("renders without errors", () => {
    // Arrange
    const { container } = renderViewAccounts();

    // Assert
    expect(container).toBeInTheDocument();
  });

  it("displays account items", () => {
    // Arrange
    const { getAllByText } = renderViewAccounts();

    // Assert
    expect(getAllByText(/Platform\d+/)).toHaveLength(103);
  });

  it("deletes an account when delete button is clicked", () => {
    // Arrange
    const { queryByText, getByTestId } = renderViewAccounts();

    // Act
    fireEvent.click(getByTestId("0-delete"));

    // Assert
    expect(queryByText("Platform0")).not.toBeInTheDocument();
  });
});
