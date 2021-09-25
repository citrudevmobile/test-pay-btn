import React from "react";

export interface SplitBtnViewProps {
  // Fill here

}

export default React.memo<SplitBtnViewProps>((props)=> {
    const [showElement, setShowElement] = React.useState("none")
    
    React.useEffect(() => {
        setShowElement('block')
    }, [props.show]);
    
  return ( 
    <div>

        <div style={{ backgroundColor: "pink", display: "inline", margin: "1px" }} >{"< P >"}</div> 
  
        <div style={{ backgroundColor: "pink", display: "inline", margin: "1px" }} >{"< B >"}</div>

   </div>
 
 )
});
