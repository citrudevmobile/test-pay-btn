import React from "react";

export interface LoadingBtnViewProps {
  // Fill here
  showLoading: string
}

export default React.memo<LoadingBtnViewProps>((props)=> {
    
  return ( 
    <div style={{backgroundColor: "pink", display: props.showLoading }} >{" Loading.... "}</div>
 );

});