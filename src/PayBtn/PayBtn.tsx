import React from "react";
import uuid from "uuid";

import { useDispatch, useSelector } from "../redux";
import { selectInvoice, selectPaypalInfo } from "../selectors";
import { fetchInvoiceFrom } from "../actions";

import PayBtnView from "./PayBtnView";
import SplitButton from "../SplitBtn"

export interface PayBtnProps {
  amount: number;
  userID: string;
  callback: () => void;
}

export default React.memo<PayBtnProps>(function PayBtn(props) {
    function callToRedux () {
        console.log("calling redux....")
        props.callback()
    }
  return <PayBtnView callback={callToRedux}/>;
});
