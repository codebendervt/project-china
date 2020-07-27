import React, { useState } from 'react';



function Example({value, onClicked}) {

  return (

  
    <div className="w-8 flex items-center mx-4" onClick={() => onClicked(!value)}>
    {
        value ?  <img src={} alt="open"></img> : <img src={} alt="close"></img>
       
    }
    
    </div>
  );
}

export default Example;