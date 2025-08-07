// ===================================================================Integrating Test caese==========================================================

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Main from "../Main/Main";
import "@testing-library/jest-dom";
import { it } from "@jest/globals";
import MOCK_DATA from "../../../__mocks__/resCardMock.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render body component", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
      <Main />
    </BrowserRouter>
)
);

  const searchBtn = screen.getByRole("button", {name: "Search"});

  expect(searchBtn).toBeInTheDocument();
});

it("should search body component", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
      <Main />
    </BrowserRouter>
)
);
const cardsforSearch = screen.getAllByTestId("resCard");

expect (cardsforSearch.length).toBe(20);

});


it("should render search body component", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
      <Main />
    </BrowserRouter>
)
);

  const searchBtn = screen.getByRole("button", {name: "Search"});

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target:  { value: "burger" } });

  fireEvent.click(searchBtn);

//   screen should load cards with word "burger"

await waitFor(() => {
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(1);
});

});
