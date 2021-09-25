import React from "react";
import Classes from"./styles.module.css"

export interface payTextboxProps {
  // Fill here
  showPayTextbox: string;
  showInfo: string;
}

export default React.memo<payTextboxProps>((props)=> {
    
  return ( 

            <div style={{display: props.showPayTextbox }} >

            <img src="https://via.placeholder.com/50" alt="Avatar" className={Classes.avatar}/>
            
            <input type="text" className={Classes.textbox} placeholder={props.showInfo}/>

            <input className={Classes.paybtn} type="button" value="Pay"/>

            <p>will expire in 10 seconds</p>
            </div>
 );

});