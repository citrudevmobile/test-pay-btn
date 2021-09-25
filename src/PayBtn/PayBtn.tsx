import React from "react";
import uuid from "uuid";

import { useDispatch, useSelector } from "../redux";
import { selectInvoice, selectPaypalInfo } from "../selectors";
import { fetchInvoiceFrom } from "../actions";

import PayBtnView from "./PayBtnView";
import SplitBtnView from "./SplitBtnView";
import ShowLoading from "./LoadingBtnView";

export interface PayBtnProps {
  amount: number;
  userID: string;
}

export default React.memo<PayBtnProps>(function PayBtn(props) {

    const [showPayBtn, setShowPayBtn] = React.useState('block')
    const [showSplitBtn, setShowSplitBtn] = React.useState('none')
    const [showLoading, setShowLoading] = React.useState('none')

    const payBtnClicked = () => {
        setShowPayBtn('none')
        setShowSplitBtn('block')
    }

    const paypal = () => {
        setShowSplitBtn('none')
        setShowLoading('block')
        setTimeout(()=>{
           setShowLoading('none') 
        },4000)
    }

    const bitcoin = () => {
        setShowSplitBtn('none')
        setShowLoading('block')
        setTimeout(()=>{
           setShowLoading('none') 
        },4000)
    }

  return  ( 
    <div>
        <PayBtnView payBtnClicked={payBtnClicked} showPayBtn={showPayBtn}/> 
        <SplitBtnView showSplitBtn={showSplitBtn} paypal={paypal} bitcoin={bitcoin}/> 
        <ShowLoading showLoading={showLoading}/>
    </div>
  );
});
