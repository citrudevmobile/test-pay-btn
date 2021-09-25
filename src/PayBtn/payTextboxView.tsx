import React from "react";

export interface payTextboxProps {
  // Fill here
  showPayTextbox: string
}

export default React.memo<payTextboxProps>((props)=> {
    
  return ( 
    <div style={{display: props.showPayTextbox }} >
      show textbox here...
    </div>
 );

});