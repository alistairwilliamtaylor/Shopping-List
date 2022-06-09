import React from 'react';
import { render, screen } from "@testing-library/react";
import Item from "../Item";

test('displays name of item', () => {

    render(<Item item={{crossed: false, name: "milk"}} index={1} crossOut={() => true} />);
    const ingredientName = screen.getByText('milk');
    expect(ingredientName).toBeInTheDocument();
});

test('checkbox is enabled when item is not crossed off', () => {

    render(<Item item={{crossed: false, name: "milk"}} index={1} crossOut={() => true} />);
    const checkBox = screen.getByRole('checkbox');
    expect(checkBox).toBeEnabled();
});

test('checkbox is disabled when item has been crossed off', () => {

    render(<Item item={{crossed: true, name: "milk"}} index={1} crossOut={() => true} />);
    const checkBox = screen.getByRole('checkbox');
    expect(checkBox).toBeDisabled();
});