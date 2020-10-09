import React from 'react';
import { useField } from 'eformless'
import './App.css';

function App() {
  const [test, handleChange] = useField('testing')
  return (
    <input type="text" value={test.value} onChange={handleChange} />
  )
}

export default App;
