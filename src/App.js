import './App.css';
//import { useState } from 'react';
import { Stand } from './Stand.js'
import { Pit } from './Pit.js'

export let address = 'placeholder address'; // this probably should be in json 

let x = false; // variable to change if it is pit or stand
//var test_cookie = Cookies.get('username');

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