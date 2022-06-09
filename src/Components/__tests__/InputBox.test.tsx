import React from 'react';
import { render, screen } from "@testing-library/react";
import InputBox from "../InputBox";
import userEvent from "@testing-library/user-event";

test('provides input box', () => {

    render(<InputBox addNewItemToList={() => true}/>);
    const inputBox = screen.getByRole('textbox')
    expect(inputBox).toBeInTheDocument();
});

test('input box contains text entered by user', async () => {

    render(<InputBox addNewItemToList={() => true}/>);
    const inputBox = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button');
    userEvent.type(inputBox, 'chocolate');
    expect(inputBox).toHaveValue('chocolate');
});

test('clears input box after user submits input', async () => {

    render(<InputBox addNewItemToList={() => true}/>);
    const inputBox = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button');
    userEvent.type(inputBox, 'chocolate');
    userEvent.click(submitButton);
    expect(inputBox).toHaveValue('');
});