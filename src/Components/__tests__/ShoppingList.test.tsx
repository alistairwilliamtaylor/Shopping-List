import React from 'react';
import { render, screen } from "@testing-library/react";
import ShoppingList from "../ShoppingList";

test('displays all items in the shopping list', () => {

    render(<ShoppingList items={[{crossed: false, name: "milk"}, {crossed: true, name: "chocolate"}]} crossOut={() => true}/>);
    const milkIngredient = screen.getByText('milk')
    const chocolateIngredient = screen.getByText('chocolate')
    expect(milkIngredient).toBeInTheDocument();
    expect(chocolateIngredient).toBeInTheDocument();
});