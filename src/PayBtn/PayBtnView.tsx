import React from "react";
//import { callbackify } from "util";

export interface PayBtnViewProps {
  // Fill here
  callback: () => void
}

export default React.memo<PayBtnViewProps>(function PayBtn(props) {
    const [showElement, setShowElement] = React.useState("block")
    const onClick = () => {
        setShowElement("none")
        props.callback()
    }

  return <div style={{backgroundColor: "pink", display: showElement }} onClick={onClick}>{"< PAY >"}</div>;
});
