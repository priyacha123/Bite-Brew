import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header/Header"
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import  appStore  from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../../utils/UserContext";



test("should render Header component", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: "Test User" }}>
          <Header />
        </UserContext.Provider>
        </Provider>
        </BrowserRouter>
    );

    const loginBtn = screen.getByRole('button', {name: "Login"})

    expect(loginBtn).toBeInTheDocument();
})

test("should render Header component", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
             <UserContext.Provider value={{ loggedInUser: "Test User" }}>
          <Header />
        </UserContext.Provider>
        </Provider>
        </BrowserRouter>
    );

    // Regex
    const loginBtn = screen.getByText(/Cart/)

    expect(loginBtn).toBeInTheDocument();
})
test("should render Header component", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: "Test User" }}>
          <Header />
        </UserContext.Provider>
        </Provider>
        </BrowserRouter>
    );

    const loginBtn = screen.getByRole('button', {name: "Login"})

    fireEvent.click(loginBtn)

    const logoutBtn = screen.getByRole('button', {name: "Logout"})

    expect(loginBtn).toBeInTheDocument();
})


