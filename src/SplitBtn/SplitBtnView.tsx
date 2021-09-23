import React from "react";

export interface SplitBtnViewProps {
  // Fill here
}

export default React.memo<SplitBtnViewProps>(()=> {
  return <div> <div style={{ backgroundColor: "pink", display: "inline", margin: "10px" }}>{"< P >"}</div> <div style={{ backgroundColor: "pink", display: "inline", margin: "10px" }}>{"< B >"}</div> </div>;
});
