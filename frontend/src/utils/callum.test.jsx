import { render, screen } from "@testing-library/react";
import Recipe from "../pages/Recipe"
import {expect,test} from '@jest/globals'

describe("Testing of the Search Recipe Function", () => {
    test("Searching for Steak", async () => {
        const search="steak";
        const data =  await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`
        );
        const recipes = await data.json();
        expect(recipes.totalResults).toBeGreaterThan(0);
    })
    test("Searching for playstation, expecting nothing to be returned", async () => {
        const search="playstation"
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`
        );
        const items = await data.json();
        expect(items.totalResults).toBeGreaterThan(0);
    })
})

describe("Tests the creation of the Recipe page", () => {
    test("displays recipe page, and tests all functionality is accessible", () => {
        render(<Recipe />);
    
        expect(screen.getByRole("img")).toBeInTheDocument();
        expect(screen.getByRole("button", {name: "Summary"})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: "Ingredients"})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: "Instructions"})).toBeInTheDocument();
    })
})