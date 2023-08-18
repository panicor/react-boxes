import React from "react";
import { render } from '@testing-library/react';
import Box from './Box';

test('renders', () => {
  render(<Box />);
});

test("snapshot matches", () => {
  let {asFragment} = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
})