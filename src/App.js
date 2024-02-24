
import './App.css';
//import { useState } from 'react';
import { Stand } from './Stand.js'
import { Pit } from './Pit.js'

let x = true;

export function TopButtons() {
  
  return (
    <div id='top-buttons-div'>
      <button onClick={changeToStand}>Stand</button>
      <button onClick={changeToPit}>Pit</button>
    </div>
  );
  function changeToStand() {
    csop(true);
  }
  function changeToPit() {
    csop(false);
  }
}

function EmailInput() {
  return (
      <div id='email-div'>
          <h3>Email:</h3>
          <input id='email-input'></input>
      </div>
  );
}

function UsernameInput() {
  return (
      <div id='username-div'>
          <h3>Username:</h3>
          <input id='username-input'></input>
      </div>
  );
}

function PasswordInput() {
  return (
      <div id='password-div'>
          <h3>Password:</h3>
          <input id='password-input' type="password"></input>
      </div>
  );
}

function LoginButton() { 
  return(
      <button onClick={handleLoginButton}>Submit</button>
  );
  function handleLoginButton() {
      localStorage.setItem('username', document.getElementById('username-input').value);
      localStorage.setItem('email', document.getElementById('email-input').value);
      localStorage.setItem('password', document.getElementById('password-input').value);
    }
}

export function Login() {
  return (
      <div id="login-page-div">
          <EmailInput />
          <UsernameInput />
          <PasswordInput />
          <br></br>
          <LoginButton />
      </div>
  )
}

function App() {
  if (localStorage.getItem('username') === null) {
    return (<Login />);
  } else {
    if (x) {
      return(
        <div id='omnipresent*-div'>
          <TopButtons />
          <Stand />
        </div>
      );
    } else {
      return (
        <div id='omnipresent*-div'>
          <TopButtons />
          <Pit />
        </div>
      );
    }
  }
}
export default App;