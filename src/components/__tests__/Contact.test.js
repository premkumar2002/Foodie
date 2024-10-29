import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactUs from '../ContactUs'; // Adjust this path as necessary
import "@testing-library/jest-dom";

describe("Contact page test cases",()=>{
    test("is name available", () =>{
        render(<ContactUs/>);
    
        const name = screen.getByText("Name:");
        expect(name).toBeInTheDocument();
    });
    test("is Button loaded", () =>{
        render(<ContactUs/>);
    
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    test("is textbox loaded", () =>{
        render(<ContactUs/>);
    
        const inputbox = screen.getAllByRole("textbox");
        expect(inputbox.length).toBe(3);
    });
});
