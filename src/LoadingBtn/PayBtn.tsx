import React from "react";
import uuid from "uuid";

import { useDispatch, useSelector } from "../redux";
import { selectInvoice, selectPaypalInfo } from "../selectors";
import { fetchInvoiceFrom } from "../actions";

import PayBtnView from "./PayBtnView";

export interface PayBtnProps {
  amount: number;
  userID: string;
  callBack: () => void;
}

export default React.memo<PayBtnProps>(function PayBtn(props) {
    
    function callToRedux () {
        console.log("calling redux....")
        props.callBack()
    }

  return <PayBtnView callback={callToRedux} />;
});
