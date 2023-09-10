import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ViewAccounts from "@/app/view-accounts/view-accounts";
import { initDb } from "@/data/db";

const renderViewAccounts = () => {
  return render(<ViewAccounts />);
};

describe("ViewAccounts Component", () => {
  beforeAll(async () => {
    await initDb();
  });

  it("renders without errors", () => {
    // Arrange
    const { container } = renderViewAccounts();

    // Assert
    expect(container).toBeInTheDocument();
  });
});
