import React from "react";
import { v4 as uuidv4 } from 'uuid';

import { useDispatch, useSelector } from "../redux";
import { selectInvoice, selectPaypalInfo } from "../selectors";
import { fetchInvoiceFrom,  refreshPaypalInfo} from "../actions";

import PayBtnView from "./PayBtnView";
import SplitBtnView from "./SplitBtnView";
import ShowLoading from "./LoadingBtnView";
import PayTextbox from "./PayTextboxView";

export interface PayBtnProps {
  amount: number;
  userID: string;
}

export default React.memo<PayBtnProps>(function PayBtn (props) {

    const Invoice = useSelector(selectInvoice(props.userID));
    const paypalInfo = useSelector(selectPaypalInfo(props.userID))
    const [showPayBtn, setShowPayBtn] = React.useState('block');
    const [showSplitBtn, setShowSplitBtn] = React.useState('none');
    const [showLoading, setShowLoading] = React.useState('none');
    const [showPayTextbox, setShowPayTextbox] = React.useState('none');
    const [showTextboxInfo, setShowTextboxInfo] = React.useState('');
    const [optionChosen, setOptionChosen] = React.useState('');
    const [invoiceID, setInvoiceID] = React.useState('');

    React.useEffect(()=> {
         if (optionChosen === 'bitcoin') { 
            if (paypalInfo !== null) {
                setShowTextboxInfo(paypalInfo.paypalEmail)
                setShowLoading('none')
                setShowPayTextbox('block')
                console.log(paypalInfo)
            } else {
                //dispatch(refreshPaypalInfo(props.userID));
            }
         }
        
        if (optionChosen === 'bitcoin') {
            if (Invoice !== null ) {
                setShowTextboxInfo(Invoice.data);
                setShowLoading('none')
                setShowPayTextbox('block')
                console.log(Invoice)
            } else {
               //dispatch(fetchInvoiceFrom(props.userID, props.amount, invoiceID))
            }
        }
        
    }, [Invoice, paypalInfo])

    
    const dispatch = useDispatch()

    const payBtnClicked = () => {
        setShowPayBtn('none')
        setShowSplitBtn('block')
    }

    const paypal = () => {
        //dispatch(refreshPaypalInfo(props.userID));
        setOptionChosen('paypal')
        setShowSplitBtn('none')
        setShowLoading('block')
        //;
    }

    const bitcoin = () => {
        setInvoiceID(uuidv4().toString())
        //dispatch(fetchInvoiceFrom(props.userID, props.amount, invoiceID));
        setOptionChosen('bitcoin')
        setShowSplitBtn('none')
        setShowLoading('block')
        console.log(invoiceID)
    }

  return  ( 
    <div>
        <PayBtnView payBtnClicked={payBtnClicked} showPayBtn={showPayBtn}/> 
        <SplitBtnView showSplitBtn={showSplitBtn} paypal={paypal} bitcoin={bitcoin}/> 
        <ShowLoading showLoading={showLoading}/>
        <PayTextbox showPayTextbox={showPayTextbox} showInfo={showTextboxInfo}/>
    </div>
  );
});
