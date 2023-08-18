import React from "react";

function Box({ id, handleRemove, width, height, backgroundColor }) {
  let removeBox = () => handleRemove(id);
  return <div>
    <div style ={{height: `${height}px`, width: `${width}px`, backgroundColor}}>
    </div>
    <button onClick={removeBox}> Remove</button>
  </div>;
}

export default Box;
