import './App.css';
import { useState } from 'react';
import { Stand } from './Stand.js';
import { Pit } from './Pit.js';

export function TopButtons({csop}) {
  return (
    <div id='top-buttons-div'>
      <h2>ChickenScout Web App</h2>
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
          <br></br>
          <h2>Refresh the page after submission.</h2>
      </div>
  )
}


function App() {
  const [StandOrPit, changeStandOrPit] = useState(true);
  if (localStorage.getItem('username') === null || localStorage.getItem('email') === null || localStorage.getItem('password') === null) {
    return (<Login />);
  } else {
    if (StandOrPit) {
      return(
        <div id='omnipresent*-div'>
          <TopButtons csop={changeStandOrPit}/>
          <Stand />
        </div>
      );
    } else {
      return (
        <div id='omnipresent*-div'>
          <TopButtons csop={changeStandOrPit}/>
          <Pit />
        </div>
      );
    }
  }
}
export default App;