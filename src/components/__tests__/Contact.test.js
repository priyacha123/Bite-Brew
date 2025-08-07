import { render, screen } from "@testing-library/react"
import Contact from "../Contact/Contact"
import "@testing-library/jest-dom";

// "describe" => to group test cases of same component or smt common
describe("contact tests cases", () => {
    
    test("load contact", () => {
        render(<Contact />);
    
        // Querying
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    })
    
    it("should load contact", () => {
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    })
    
    test("load contact", () => {
        render(<Contact />);
    
        const button = screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
    })

})


