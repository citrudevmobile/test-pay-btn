import React from "react";
import uuid from "uuid";

import { useDispatch, useSelector } from "../redux";
import { selectInvoice, selectPaypalInfo } from "../selectors";
import { fetchInvoiceFrom } from "../actions";

import SplitBtnView from "./SplitBtnView";

export interface SplitBtnProps {
  show: boolean;
}

export default React.memo<SplitBtnProps>(function PayBtn(props) {
  return (

  <SplitBtnView />

  );
});
