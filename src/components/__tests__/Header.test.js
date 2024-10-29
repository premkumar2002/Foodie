import { Provider} from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import {render, screen, fireEvent} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import "@testing-library/jest-dom";

test("Header should load with a login button", () =>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>  
    );

    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
});

test("Render cart with zero items", () =>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>  
    );

    const items = screen.getByText("0");
    expect(items).toBeInTheDocument();
});

test("Header should load with a logout button", () =>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>  
    );

    const loginButton = screen.getByRole("button", {name : "Login"});

    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name: "Logout"});
;
    expect(logoutButton).toBeInTheDocument();
});