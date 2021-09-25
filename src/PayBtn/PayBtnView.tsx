import React from "react";
import 
//import { callbackify } from "util";

export interface PayBtnViewProps {
  // Fill here
  callback: () => void
}

export default React.memo<PayBtnViewProps>(function PayBtn(props) {

    const [showPayBtn, setShowPayBtn] = React.useState("block")
    const [] = React.useState()

    const payBtnClicked = () => {
        setShowPayBtn("none")
    }

    const 

  return (
    <div style={{backgroundColor: "pink", display: showPayBtn }} onClick={payBtnClicked}>{"< PAY >"}</div>

  ); 
});
