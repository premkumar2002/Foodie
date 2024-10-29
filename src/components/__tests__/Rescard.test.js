import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../Restaurantcard";
import MOCK_DATA from "../mocks/ResCardMock.json"
import React from "react";

test("Shoudl render rescard", ()=>{
    render(
        <RestaurantCard resData={MOCK_DATA}/>
    );

    const desc = screen.getByText("Biryani, North Indian, Punjabi, Healthy Food, Desserts, Beverages");

    expect(desc).toBeInTheDocument();
})