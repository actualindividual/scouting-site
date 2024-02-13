import './App.css';
//import { useState } from 'react';
import { Stand } from './Stand.js'
import { Pit } from './Pit.js'

let x = false; // variable to change if it is pit or stand

function App() {
  if (x) {
    return (
    <Stand /> 
  );
  } else if (!x) {
    return (
    <Pit />
  );
  }
}

export default App;