import { render, userEvent, fireEvent, screen } from "@testing-library/react";
import Recipe from "../pages/Recipe"
import {expect, jest, test} from '@jest/globals'


test("displays recipe page, and tests all functionality is accessible", () => {
    render(<Recipe />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("button", {name: "Summary"})).toBeInTheDocument();
    expect(screen.getByRole("button", {name: "Ingredients"})).toBeInTheDocument();
    expect(screen.getByRole("button", {name: "Instructions"})).toBeInTheDocument();
})

test("Checks that button can be clicked", () => {
    render(<Recipe />);

})