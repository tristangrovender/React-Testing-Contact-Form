import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
    render(<App />);
});

test("renders first name", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/First Name/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders last name", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/last name/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders email", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/email/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders message", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/message/i);
    expect(linkElement).toBeInTheDocument();
});

// Example from TK

// test("increments count when increment button is clicked", async () => {
//     // Arrange
//     const { getByText } = render(<Counter />);
//     // Act
//     const count = getByText(/0/i);
//     // get the button node
//     const button = getByText(/increment/i);
//     // simulate a user click
//     fireEvent.click(button);
//     // Assert
//     expect(count).toHaveTextContent("1"); //passes with 1 because we expect it to be 1 after a button click
//     expect(count).not.toHaveTextContent("0");
//   });
