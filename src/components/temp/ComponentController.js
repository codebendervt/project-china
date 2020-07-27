import React, { useReducer } from 'react';
import TextInput from './textinput'


// important for controller states
const initialState = '';
const reducer = (state, action) => action;
//end of controller state


const InputControllerExample = () => {
  const [firstName, changeFirstName] = useReducer(reducer, initialState);
  const [lastName, changeLastName] = useReducer(reducer, initialState);

  const saveState = () =>{
      sessionStorage.object = JSON.stringify({username:firstName, userLast:lastName})
      console.log(sessionStorage.object)
  }


  return (
    <>
      <div>
        First Name:
        <TextInput value={firstName} onChangeText={changeFirstName} />
      </div>
      <div>
        Last Name:
        <TextInput value={lastName} onChangeText={changeLastName} />
      </div>

      <button onClick={() => saveState()}>Check Console</button>
    </>
  );
};


export default InputControllerExample;