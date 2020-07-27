import React from 'react';

const TextInput = ({ value, onChangeText }) => (
    <input type="text" value={value} onChange={e => onChangeText(e.target.value)} />
  );

  
  export default TextInput;