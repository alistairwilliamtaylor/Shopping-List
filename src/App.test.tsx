import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders shopping list title', () => {
  render(<App />);
  const title = screen.getByText(/My Shopping List/i);
  expect(title).toBeInTheDocument();
});