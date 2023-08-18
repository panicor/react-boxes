import React from "react";
import { render } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
});

test("snapshot matches", () => {
  let {asFragment} = render(<App />);
  expect(asFragment()).toMatchSnapshot();
})