import React from "react";
import ReactDom  from "react-dom/client";   
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs  from "./components/ContactUs";

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/",
        element: <AppLayout />,
    },
    {
        path: "/contactus",
        element: <ContactUs />,
    }
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter } />);