import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  let [boxes, setBoxes] = useState([]);

  let addBox = (boxObj) => {
    setBoxes((boxes) => [...boxes, boxObj]);
  };
  let removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  let boxComps = boxes.map((box) => (
    <Box key={box.id} id={box.id} width={box.width} height={box.height} backgroundColor={box.backgroundColor} handleRemove={removeBox}/>
  ));


  return(
    <div>
        <NewBoxForm addBox={addBox}/>
        {boxComps}
    </div>
  )
}


export default BoxList;
