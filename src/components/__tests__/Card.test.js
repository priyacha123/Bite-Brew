import { render, screen } from "@testing-library/react"
import Card from "../Main/Card"
import "@testing-library/jest-dom";
import MOCK_DATA from '../../../__mocks__/resCardMock.json'

it("should render card", () => {
    render(<Card resData={MOCK_DATA} /> )

    // const name = screen.getByText("Pizza Hut");

    // expect(name).toBeInTheDocument();
})


// ===================================================================Integrating Test