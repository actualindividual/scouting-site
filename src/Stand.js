import './Stand.css'
import { useState } from 'react';

// These are all collected from user through forms. If they aren't declared here the app throws an error
let alliance;
//let team;
let left_zone;
let drops;
//let scoutname;
let parked;
let climbed;
let harmony;
let trap;
let autoamp = 0;
let autospeaker = 0;
let teleamp = 0;
let telespeaker_a = 0;
let telespeaker_u = 0;
let didcoop;
let offeredcoop;


// This function is part of my code cleanup effort.
// It will help avoid using many components that do effectively the same thing
// just to different variables, hopefully reducing file size and making the code
// make more sense.
// PARAMATER BREAKDOWN:
// statevar: the state variable being used. This should be a boolean.
// setStateVar: the state variable being used's changer function
// id: id for the display value.
export function PlusMinusComponent(statevar, setStateVar, id) {
  return(
    <div>
      <b id={id}>
        {statevar}
      </b><br></br><br></br>
      <button onClick={() => setStateVar(statevar + 1)} className='plusminus-button'>
        +
      </button>
      <button onClick={() => setStateVar(autoamp - 1)} className='plusminus-button'>
        -
      </button>
    </div>
  );
}

// This function is part of my code cleanup effort.
// It will help avoid using many components that do effectively the same thing
// just to different variables, hopefully reducing file size and making the code
// make more sense.
// PARAMATER BREAKDOWN:
// statevar: the state variable being used. This should be a number.
// setStateVar: the state variable being used's changer function
// id: the id of the component
export function CheckboxComponent(statevar, setStateVar, id ) {
  return (
  <input
  type="checkbox"
  onChange={handler}
  value={statevar}
  id={id}
  name='checkbox'
  />
  );
  function handler() { // internal function that doesn't exist outside of the component's function
    if (document.getElementById(id).value === true) {setStateVar(true);}
    else if (document.getElementById(id).value === false) {setStateVar(false);}
  }
}


// Alliance buttons and their functions
export function redbtnfunc() {
  alliance = "red";  
  console.log(alliance);
}
export function bluebtnfunc() {
  alliance = "blue";
  console.log(alliance);
}

export function RedButton() {
  return(
    <button onClick={redbtnfunc} className='red-btn'>
      Red
    </button>
  );
}
export function BlueButton() {
  return(
    <button onClick={bluebtnfunc} className='blue-btn'>
      Blue
    </button>
  );
}

// Text inputs

export function ScoutNameInput() {
  return (
    <input type='text' id="scoutname-input">
    </input>
  );
}
export function MatchNumInput() {
  return (
    <input type='text' id='match-input'>
    </input>
  );
}

export function TeamNumInput() {
  return (
    <input type='text' id='tn-input'>
    </input>
  );
}


// UPLOAD/SAVE STUFF

export function uploadStand(e) {
  e.preventDefault();
  fetch("http://98.59.100.219:3082/matchinput", {
     method: 'POST',
     headers: new Headers({'content-type': 'application/json'}),
     body: JSON.stringify({
        username: localStorage.getItem('username').value,
        email: localStorage.getItem('email').value,
        password: localStorage.getItem('password').value, // should be hashed
        scoutname: document.getElementById('scoutname-input').value,  
        team: document.getElementById('tn-input').value,
        matchNumber: document.getElementById('match-input').value,
        alliance: alliance,
        autoAmpPoints: autoamp,
        autoSpeakerPoints: autospeaker,
        autoLeftZone: left_zone,
        teleAmpPoints: teleamp,
        teleSpeakerPoints: telespeaker_u,
        teleSpeakerAmplifiedNotes: telespeaker_a,
        drops: drops,
        climbed: climbed,
        parked: parked,
        harmony: harmony,
        trap: trap,
        offeredcoop: offeredcoop,
        didcoop: didcoop,

     })})
}
  
// function for saving to local storage. should be used when the http request fails, not
// implemented yet.
export function saveStand(e) {
  window.event.preventDefault();
  localStorage.setItem(localStorage.getItem('username').value + '-match-' + document.getElementById('match-input').value,JSON.stringify({
        username: localStorage.getItem('username').value,
        email: localStorage.getItem('email').value,
        password: localStorage.getItem('password').value, // should be hashed
        scoutname: document.getElementById('scoutname-input').value,  
        team: document.getElementById('tn-input').value,
        matchNumber: document.getElementById('match-input').value,
        alliance: alliance,
        autoAmpPoints: autoamp,
        autoSpeakerPoints: autospeaker,
        autoLeftZone: left_zone,
        teleAmpPoints: teleamp,
        teleSpeakerPoints: telespeaker_u,
        teleSpeakerAmplifiedNotes: telespeaker_a,
        drops: drops,
        climbed: climbed,
        parked: parked,
        harmony: harmony,
        trap: trap
  })
)}

function bigSubmitStand() {
  //submitHandler();
  saveStand(window.event);
  /*try {
    uploadStand();
  } catch(err) {
    saveStand();
  }*/
}

function SubmitButton() {
  return (
  <button onClick={bigSubmitStand} id='submit-button'>Submit</button>
  );
}

export function Stand() {
  return (
    <div className='stand-container'>
    </div>
  );
}


