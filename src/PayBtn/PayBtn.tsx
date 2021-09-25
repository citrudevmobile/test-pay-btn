import React from "react";
import uuid from "uuid";

import { useDispatch, useSelector } from "../redux";
import { selectInvoice, selectPaypalInfo } from "../selectors";
import { fetchInvoiceFrom } from "../actions";

import PayBtnView from "./PayBtnView";

export interface PayBtnProps {
  amount: number;
  userID: string;
}

export default React.memo<PayBtnProps>(function PayBtn(props) {
    let show = 'block'
    function payBtnClicked () {
        console.log('pay btn clicked')
    }

  return  ( 
      
  <PayBtnView payBtnClicked={ payBtnClicked} showPayBtn={show}/> 
  
  );
});
