import React, { useState } from 'react';
import Greeting from './component/Greeting';
import './App.css';

function App() {

  const [name, setName] = useState("");

  return (
    <>
    <div>
  <input
    onChange={({target: {value}}) => setName(value)}
    placeholder="Enter your name"
  />
  </div>
  <Greeting name={name}/>
</>
  );
}

export default App;
