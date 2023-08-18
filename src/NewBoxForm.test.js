import React from "react";
import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('renders', () => {
  render(<NewBoxForm />);
});

test("snapshot matches", () => {
  let {asFragment} = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
})