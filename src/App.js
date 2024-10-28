import React, {lazy, Suspense} from "react";
import ReactDom  from "react-dom/client";   
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs  from "./components/ContactUs";
import Error from "./components/Error";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import CartCheckout from "./components/cartCheckout";

const Groceries = lazy(() => import("./components/Groceries"));


const AppLayout = () => {
    return(
        <Provider store={appStore}>
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contactus",
                element: <ContactUs />,
            },
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/groceries",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Groceries />
                    </Suspense>
                ),
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/checkout",
                element: <CartCheckout />,
            },            
        ],
        errorElement: <Error/>, 
    },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter } />);