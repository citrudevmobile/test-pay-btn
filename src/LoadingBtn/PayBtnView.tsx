import React from "react";
//import { callbackify } from "util";

export interface PayBtnViewProps {
  // Fill here
  callback: () => string
}

export default React.memo<PayBtnViewProps>(function PayBtn(props) {
    const [showElement, setShowElement] = React.useState("none")
    React.useEffect(() => {
        setShowElement('block')
    }, [props]);
    

  return <div style={{backgroundColor: "pink", display: showElement }} onClick={onClick}>{"< Loading.... >"}</div>;
});
