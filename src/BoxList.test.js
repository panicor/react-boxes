import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import BoxList from './BoxList';


function newBox(height=300, width=300, backgroundColor="green"){
    let heightInput = screen.getByLabelText("Height");
    let widthInput = screen.getByLabelText("Width");
    let backgroundColorInput = screen.getByLabelText("Background Color");

    fireEvent.change(heightInput, {target: {value: height}})
    fireEvent.change(widthInput, {target: {value: width}})
    fireEvent.change(backgroundColorInput, {target: {value: backgroundColor}})

    let btn = screen.getByText("Add box")

    fireEvent.click(btn);

}

test('renders', () => {
  render(<BoxList />);
});

test("snapshot matches", () => {
  let {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
})

test("adds new box", () => {
    let view = render(<BoxList />);
    expect(screen.queryByText("Remove")).not.toBeInTheDocument()
    newBox(view);

    let removeBtn = screen.getByText("Remove");
    expect(removeBtn).toBeInTheDocument();

})

test("removes box", () => {
    let view = render(<BoxList />);
    newBox(view);
  
    let removeBtn = screen.getByText("Remove");

    fireEvent.click(removeBtn);
    expect(removeBtn).not.toBeInTheDocument();
})