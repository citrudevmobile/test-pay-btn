import React from "react";
import uuid from "uuid";

import { useDispatch, useSelector } from "../redux";
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

    const counter = useSelector(state => state.counter)
    const currentUser = useSelector(state => state.currentUser)

    const dispatch = useDispatch()

    const payBtnClicked = () => {
        setShowPayBtn('none')
        setShowSplitBtn('block')
    }

    const paypal = () => {
        setShowSplitBtn('none')
        setShowLoading('block')
        setTimeout(()=>{
           setShowLoading('none') 
           setShowPayTextbox('block')
           setTimeout(() => {
               
           }, 10000)
        },4000)
        dispatch(fetchInvoiceFrom(refreshPaypalInfo(props.userID)))
    }

    const bitcoin = () => {
        setShowSplitBtn('none')
        setShowLoading('block')
        setTimeout(()=>{
           setShowLoading('none') 
           setShowPayTextbox('block')
           setTimeout(() => {

           }, 10000)
        },4000);
        dispatch(fetchInvoiceFrom(props.userID, props.amount, uuid.v4());
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
