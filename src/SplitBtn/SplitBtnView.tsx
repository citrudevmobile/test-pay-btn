import React from "react";

export interface SplitBtnViewProps {
  // Fill here
}

export default React.memo<SplitBtnViewProps>(()=> {
  return <div> <div style={{ backgroundColor: "pink" }}>{"< P >"}</div> <div style={{ backgroundColor: "pink" }}>{"< B >"}</div> </div>;
});
