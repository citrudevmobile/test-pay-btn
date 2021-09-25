import React from "react";
///import { callbackify } from "util";
import SplitBtn from "../SplitBtn";

export interface PayBtnViewProps {
  // Fill here
  payBtnClicked: () => void;
  showPayBtn: string;

}

export default React.memo<PayBtnViewProps>(function PayBtn(props) {

  return (
    <div style={{backgroundColor: "pink", display: props.showPayBtn }} onClick={props.payBtnClicked}>{"< PAY >"}</div>
  ); 

});
