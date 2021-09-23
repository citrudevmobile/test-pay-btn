import React from "react";

export interface PayBtnViewProps {
  // Fill here
}

export default React.memo<PayBtnViewProps>(function PayBtn() {
  return <div style={{ backgroundColor: "pink" }} onClick={()=>{
      console.log("okay this works next move")
  }}>{"< PAY >"}</div>;
});
