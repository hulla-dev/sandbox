import React from 'react';
import { useField } from 'eformless'
import './App.css';

function App() {

  // Add this in your component file
require('react-dom');
// @ts-ignore
window.React2 = require('react');
// @ts-ignore
console.log(window.React1 === window.React2);
  const [test, handleChange] = useField('testing')
  return (
    <input type="text" value={test.value} onChange={handleChange} />
  )
}

export default App;
