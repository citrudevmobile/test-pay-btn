import React from "react";
import Classes from"styles.module.css"

export interface payTextboxProps {
  // Fill here
  showPayTextbox: string
}

export default React.memo<payTextboxProps>((props)=> {
    
  return ( 
    <div style={{display: props.showPayTextbox }} >

      <img src="avatar.png" alt="Avatar" className={Classes.avatar}/></img>
      
      <input type="text" className={Classes.textbox} placeholder= {{}}/>

      <input className={Classes.paybtn} type="button" value="Pay"/>

    </div>
 );

});