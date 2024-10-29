import React from 'react';
import { render, screen } from '@testing-library/react';
import Body from '../Body'; // Adjust this path as necessary
import "@testing-library/jest-dom";
import { json } from 'react-router-dom';


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(data);
        }
    })
});

test("Sgould render with search", () => {
    render(<Body />);
})