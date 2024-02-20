import { address } from "./App";

let password = String;
let email = String;
let username = String;

function EmailInput() {
    return (
        <div id='email-div'>
            <h3>Email:</h3>
            <input id='username-input' onChange={emailInputHandler}></input>
        </div>
    );
    function emailInputHandler() {
        let email = document.getElementById('email-input');
    }
}

function UsernameInput() {
    return (
        <div id='username-div'>
            <h3>Username:</h3>
            <input id='username-input' onChange={usernameInputHandler}></input>
        </div>
    );
    function usernameInputHandler() {
        let username = document.getElementById('username-input');
    }
}

function PasswordInput() {
    return (
        <div id='password-div'>
            <h3>Password:</h3>
            <input id='password-input' onChange={passwordInputHandler}></input>
        </div>
    );
    function passwordInputHandler() {
        let password = document.getElementById('password-input');
    }
}

function saveLoginInfo() {
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('username', password);

}
function LoginButton() {
    return(
        <button onClick={handleLoginButton}>Submit</button>
    );
    function handleLoginButton() {
        saveLoginInfo();
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