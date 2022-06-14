import React from 'react';
import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from './App';

test('displays shopping list title', () => {

  render(<App />)
  const title = screen.getByText(/shopping list/i)
  expect(title).toBeInTheDocument()
})

test('adds new item to shopping list', () => {

  render(<App />)
  const inputBox = screen.getByRole('textbox')
  const addButton = screen.getByRole('button', { name: /add/i} )
  userEvent.type(inputBox, "chocolate")
  userEvent.click(addButton)
  const chocolateItem = screen.getByText("chocolate")
  expect(chocolateItem).toBeInTheDocument()
})

test('crossing out item disables checkbox', () => {

  render(<App />)
  const milkCheckBox = screen.getByLabelText(/milk/i)
  expect(milkCheckBox).toBeEnabled()
  userEvent.click(milkCheckBox)
  expect(milkCheckBox).toBeDisabled()
})

test('checks off item that is added by user', () => {

  render(<App />)
  const inputBox = screen.getByRole('textbox')
  const addButton = screen.getByRole('button', { name: /add/i} )
  userEvent.type(inputBox, 'chocolate')
  userEvent.click(addButton)
  const chocolateCheckBox = screen.getByLabelText('chocolate')
  userEvent.click(chocolateCheckBox)
  expect(chocolateCheckBox).toBeDisabled()
})

