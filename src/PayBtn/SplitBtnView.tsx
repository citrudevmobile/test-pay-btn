import React from "react";

export interface SplitBtnViewProps {
  // Fill here
  showSplitBtn: string;
  paypal: () => void;
  bitcoin: () => void;
}

export default React.memo<SplitBtnViewProps>((props)=> {
    
  return ( 
    <div style={{display: props.showSplitBtn}}>

        <div style={{ backgroundColor: "pink", display: "inline", margin: "1px" }} onClick={props.paypal}>{"< P >"}</div> 
  
        <div style={{ backgroundColor: "pink", display: "inline", margin: "1px" }} onClick={props.bitcoin}>{"< B >"}</div>

   </div>
 );

});
