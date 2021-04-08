import React from "react";
import Root from "./root.component";
import { render, screen } from "@testing-library/react";

describe("<Root/>", () => {
  beforeEach(() => {
    render(<Root />);
  });

  it("should render without dying", () => {
    expect(screen.getByText(/Root Component/i)).toBeTruthy();
  });
});
