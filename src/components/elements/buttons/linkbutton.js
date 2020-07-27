import React, { useState } from 'react';


function LinkButton({text,value, onClicked, icon}) {

    return (
  
    
  
      
      <div className="text-2xl flex cursor-pointer my-4 w-64" onClick={() => onClicked({type:text})}>
      <div className="text-sm mx-4">0{icon + 1}</div>
      {
          <div className="text-4xl font-bold">{text}</div>
        //   value.property ?  "Loading page..." : >
         
      } 
    </div>
  
    );
  }
  
  export default LinkButton;