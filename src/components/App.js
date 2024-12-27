import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  const [state, setState]=useState('hide');

  return (
    <div className="App" id="main">
      <p id="para" className={state}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onClick={()=> {if(state==='show'){setState('hide')} else{setState('show')}}}>Click me</button>
    </div>
  );
}

export default App
