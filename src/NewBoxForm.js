import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewBoxForm({ addBox }) {
  let [formData, SetFormData] = useState({
    height: "",
    width: "",
    backgroundColor: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    SetFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  let getInput = (e) => {
    e.preventDefault();
    addBox({ ...formData, id: uuid() });
    SetFormData({ height: "", width: "", backgroundColor: "" });
  };

  return (
    <div>
      <form onSubmit={getInput}>
        <div>
          <label htmlFor="height">Height</label>
          <input
            type="text"
            onChange={handleChange}
            name="height"
            id="height"
            value={formData.height}
          ></input>
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            type="text"
            onChange={handleChange}
            name="width"
            id="width"
            value={formData.width}
          ></input>
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            type="text"
            onChange={handleChange}
            name="backgroundColor"
            id="backgroundColor"
            value={formData.backgroundColor}
          ></input>
        </div>
        <button id="boxBtn">Add box</button>
      </form>
    </div>
  );
}

export default NewBoxForm;
