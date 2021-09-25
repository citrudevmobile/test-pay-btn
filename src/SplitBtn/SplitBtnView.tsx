import React from "react";

export interface SplitBtnViewProps {
  // Fill here

}

export default React.memo<SplitBtnViewProps>((props)=> {
    
  return ( 
    <div>

        <div style={{ backgroundColor: "pink", display: "inline", margin: "1px" }} >{"< P >"}</div> 
  
        <div style={{ backgroundColor: "pink", display: "inline", margin: "1px" }} >{"< B >"}</div>

   </div>
 );

});
