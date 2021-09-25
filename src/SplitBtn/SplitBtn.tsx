import React from "react";
import uuid from "uuid";

import { useDispatch, useSelector } from "../redux";
import { selectInvoice, selectPaypalInfo } from "../selectors";
import { fetchInvoiceFrom } from "../actions";

import SplitBtnView from "./SplitBtnView";

export interface SplitBtnProps {
  show: boolean;
  loadnext: () => void
}

export default React.memo<SplitBtnProps>(function PayBtn(props) {
    function paypal () {

        props.loadnext()
    }

    function bitcoin () {

        props.loadnext()
    }
  return <SplitBtnView show={props.show} paypal={paypal} bitcoin={bitcoin}/>;
});
