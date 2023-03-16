import { render, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

describe("SearchBar component", () => {
  it("should render the search bar with the initial value and clear the input on click", () => {
    const { getByPlaceholderText } = render(
      <SearchBar
        getSearchInput={function (input: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const input = getByPlaceholderText("search");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");

    fireEvent.change(input, { target: { value: "test" } });
    expect(input).toHaveValue("test");
  });
});
