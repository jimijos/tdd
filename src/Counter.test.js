import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Conter component", () => {
  let mockProps = { count: "10" };
  it("should render and have props", () => {
    render(<Counter {...mockProps} />);
    let headingElem = screen.getByRole("heading");
    expect(headingElem).toHaveTextContent("10");
  });
});
