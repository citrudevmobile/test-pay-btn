import React from "react";

export interface SplitBtnViewProps {
  // Fill here
  paypal: () => void;
  bitcoin: () => void;
  show: boolean;
}

export default React.memo<SplitBtnViewProps>((props)=> {
    const [showElement, setShowElement] = React.useState("none")
    
    React.useEffect(() => {
        setShowElement('block')
    }, [props.show]);
    
  return <div style={{display: showElement}}> <div onClick={()=>{ props.paypal()}} style={{ backgroundColor: "pink", display: "inline", margin: "1px" }}>{"< P >"}</div> 
  
  <div onClick={()=>{ props.bitcoin() }} style={{ backgroundColor: "pink", display: "inline", margin: "1px" }}>{"< B >"}</div> </div>;
});
