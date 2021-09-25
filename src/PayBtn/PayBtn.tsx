import React from "react";
import { v4 as uuidv4 } from 'uuid';

import { euseDispatch, euseSelector } from "../redux";
import { selectInvoice, selectPaypalInfo } from "../selectors";
import { fetchInvoiceFrom,  refreshPaypalInfo} from "../actions";

import PayBtnView from "./PayBtnView";
import SplitBtnView from "./SplitBtnView";
import ShowLoading from "./LoadingBtnView";
import PayTextbox from "./PayTextboxView"

export interface PayBtnProps {
  amount: number;
  userID: string;
}

export default React.memo<PayBtnProps>(function PayBtn(props) {


    const [showPayBtn, setShowPayBtn] = React.useState('block')
    const [showSplitBtn, setShowSplitBtn] = React.useState('none')
    const [showLoading, setShowLoading] = React.useState('none')
    const [showPayTextbox, setShowPayTextbox] = React.useState('none')
    const [showTextboxInfo, setShowTextboxInfo] = React.useState('')

    const dispatch = euseDispatch()

    const payBtnClicked = () => {
        setShowPayBtn('none')
        setShowSplitBtn('block')
    }

    const paypal = () => {

        //dispatch(refreshPaypalInfo(props.userID));
        const paypalInfo = euseSelector(selectPaypalInfo(props.userID));
        console.log(paypalInfo)
        setShowSplitBtn('none')
        setShowLoading('block')
        setTimeout(()=> {
                if (paypalInfo == null) {
                    setTimeout(() => {
                        setShowLoading('none') 
                        setShowPayTextbox('block') 
                        setShowTextboxInfo(paypalInfo.paypalEmail) 
                    }, 3000)
                } else {
                    setShowLoading('none') 
                    setShowPayTextbox('block')
                }
        },4000);

       
    }

    const bitcoin = () => {

        //dispatch(fetchInvoiceFrom(props.userID, props.amount, uuidv4()));
        const Invoice = euseSelector(selectInvoice(props.userID));
        console.log(Invoice)
        setShowSplitBtn('none')
        setShowLoading('block')
        setTimeout(()=>{
            if (Invoice == null) {
                setTimeout(() => {
                    setShowLoading('none') 
                    setShowPayTextbox('block')
                }, 3000)
            } else {
                setShowLoading('none') 
                setShowPayTextbox('block')
            }
        },4000);
        
        
    }

  return  ( 
    <div>
        <PayBtnView payBtnClicked={payBtnClicked} showPayBtn={showPayBtn}/> 
        <SplitBtnView showSplitBtn={showSplitBtn} paypal={paypal} bitcoin={bitcoin}/> 
        <ShowLoading showLoading={showLoading}/>
        <PayTextbox showPayTextbox={showPayTextbox} />
    </div>
  );
});
