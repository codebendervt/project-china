import React, {useState,useReducer} from 'react';
import Example from './exampleFunctionalComponent';



// important for controller states
const initialState = false;
const reducer = (state, action) => action;
//end of controller state


function Example({Title = "Dad", Subtitle = "Home" }) {

  const [isClicked, changeIsClicked] = useReducer(reducer, initialState);

  return (

    <div className="w-full h-24 bg-white flex  text-2xl">
    
    <div className="w-1/2 p-2 " >
      <div className={"flex h-full items-center justify-start"}>

        <Example value={isClicked} onClicked={changeIsClicked}></Example>

        <h1>{Title}</h1>
      </div>     
    </div>

    <div className="w-1/2 p-2 ">
      <div className={"flex h-full items-center justify-start"}>
      <h1>{Subtitle}</h1>
      </div>
    </div>   
  </div>
  );
}

export default Example;