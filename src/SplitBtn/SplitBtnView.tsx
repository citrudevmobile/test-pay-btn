import React from "react";

export interface SplitBtnViewProps {
  // Fill here
}

export default React.memo<SplitBtnViewProps>(()=> {
  return <div> <div style={{ backgroundColor: "pink", display: "inline" }}>{"< P >"}</div> &nbsp&nbsp <div style={{ backgroundColor: "pink", display: "inline" }}>{"< P >"}</div> </div>;
});
