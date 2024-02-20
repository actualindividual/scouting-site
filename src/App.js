// please just use the mobile app this is horrible in comparison and i am a bad programmer

import './App.css';
//import { useState } from 'react';
import { Stand } from './Stand.js'
import { Pit } from './Pit.js'
import { Login } from './Login.js';

export let address = '98.59.100.219:3082'; // this probably should be in json 

let x = true; // variable to change if it is pit or stand

function handleLoggedIn() {
  if (x) {
    return (
      <Stand />
      );
  } else {
    return(
      <Pit />
    );
  }
}

function App() {
  if (localStorage.getItem('username') === String) {
    handleLoggedIn();
  } else {
    return (
      <Login />
    );
  }
}
export default App;