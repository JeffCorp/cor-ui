import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders button", () => {
    render(<Button label="Click me" onClick={() => {}} />);
  });
});