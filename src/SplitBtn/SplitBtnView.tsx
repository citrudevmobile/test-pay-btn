import React from "react";

export interface SplitBtnViewProps {
  // Fill here
}

export default React.memo<SplitBtnViewProps>(()=> {
  return <div> <div onClick={()=>{
      console.log("paypal button pressed")
    }} style={{ backgroundColor: "pink", display: "inline", margin: "1px" }}>{"< P >"}</div> 
  
  <div onClick={()=>{
      console.log("bitcoin button pressed")
    }} style={{ backgroundColor: "pink", display: "inline", margin: "1px" }}>{"< B >"}</div> </div>;
});
