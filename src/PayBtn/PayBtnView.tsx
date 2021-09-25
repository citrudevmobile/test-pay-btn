import React from "react";
//import { callbackify } from "util";
import SplitBtn from "../SplitBtn";

export interface PayBtnViewProps {
  // Fill here
}

export default React.memo<PayBtnViewProps>(function PayBtn(props) {

    const [showPayBtn, setShowPayBtn] = React.useState('block')

    const payBtnClicked = () => {
        setShowPayBtn('none')
    }

    const renderSplitBtn = () => {
        
    }

  return (

    <div style={{backgroundColor: "pink", display: showPayBtn }} onClick={payBtnClicked}>
        {"< PAY >"}
    </div>
    
        <SplitBtn></SplitBtn>
    
    
  ); 

});
