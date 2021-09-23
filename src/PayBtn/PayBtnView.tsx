import React from "react";

export interface PayBtnViewProps {
  // Fill here
}

export default React.memo<PayBtnViewProps>(function PayBtn() {
  return <div style={{ backgroundColor: "pink" }}>{"< PAY >"}</div>;
});
