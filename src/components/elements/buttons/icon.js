import React, { useState } from 'react';



function IconButton({value, onClicked, icon, buttonSize = 8, type ="menu"}) {

  return (

  
    <div className={"w-"+(buttonSize-2)+" lg:w-"+buttonSize+" flex items-center mx-2 lg:mx-4 cursor-pointer"} onClick={() => onClicked({type: type})}>
    {
        value.property ?  <img src={icon.Close}></img> : <img src={icon.Menu}></img>
       
    }
    
    </div>
  );
}

export default IconButton;