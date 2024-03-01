import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Medibank Coding Challenge/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders list title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pet names sorted by names with owner gender type/i);
  expect(linkElement).toBeInTheDocument();
});

it("should render list based of genders", () => {
  render(<App />)
  const list = screen.getByRole("list", {
    name: /gender/i,
  })
  const { getAllByRole } = within(list)
  const items = getAllByRole("listitem")
  expect(items.length).toBe(2)
})
