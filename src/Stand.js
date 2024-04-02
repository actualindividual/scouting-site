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
      <button onClick={() => setAutoamp(autoamp - 1)} className='plusminus-button'>
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
    else if (document.getElementById(id).value === false) {setState(false);}
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
      <div className='container'>
        <h1>Stand Scouting</h1>
        <h2 className="basicinfo-text">Basic Info</h2>
        <h3 className='scout-name'>Scout name</h3>
          <ScoutNameInput />
        <h3 className='matchnumber-text'>Match Number</h3>
          <MatchNumInput />
        <h3 className='tn-text'>Team Number</h3>
          <TeamNumInput />
        <h3 className='alliance-text'>Alliance</h3>
          <RedButton />
          <BlueButton />

      <h2 className='auto-points-text'>Auto Points</h2>
        <h3 className='auto-amp-text'>Amp score</h3>
            <AutoAmpComponent />
        <h3 className='auto-speaker-text'>Speaker score</h3>
            <AutoSpeakerComponent />
        <h3 className='left-zone-text'>Left zone</h3>
            <LeftZoneComponent />

      <h2 className='teleop-points-text'>Teleop Points</h2>
        <h3 className='teleop-amp-text'>Amp score</h3>
            <TeleAmpComponent />
        <h3 className='teleop-speaker-text1'>Unamplified Speaker Score</h3>
            <TeleSpeakerUnamplifiedComponent />
        <h3 className='teleop-speaker-text2'>Amplified Speaker Score</h3>
            <TeleSpeakerAmplifiedComponent />
        <h3 className='trapscore-text'>Trap score</h3>
            <TrapComponent />
        <h3 className='drops-text'>Drops</h3>
            <DropsComponent />
        <h3 className='endgame-text'>End game</h3>
          <h3 className='climbed-text'>Robot climbed</h3>
              <ClimbedComponent />
         <h3 className='parked-text'>Robot parked</h3>
              <ParkedComponent />
         <h2 className='coop-text'>Co-op</h2>
            <h3 className='coop-offer-text'>Offered Co-op</h3>
              <OfferedCoopComponent />
            <h3 className='coop-did-text'>Did Co-op</h3>
              <DidCoopComponent />
         <h2 className=''>Mike</h2>
            <h3 className='ampmike-text'>Scored Amp Mike</h3>
              <AmpMikeComponent />
            <h3 className='ampmike-text'>Source Amp Mike</h3>
              <SourceMikeComponent />
            <h3 className='ampmike-text'>Scored Center Mike</h3>
              <CenterMikeComponent />
            <h3 className='harmony-text'>Got harmony</h3>
              <HarmonyComponent />
            <br></br><br></br>
            <SubmitButton />
    </div>
  );
}


