import './Stand.css'
import { useState } from 'react';

//const url = 'https://thingproxy.freeboard.io/fetch/' + encodeURIComponent('http://98.59.100.219:3082/matchinput');

let alliance = 'blue';
// This function is part of my code cleanup effort.
// It will help avoid using many components that do effectively the same thing
// just to different variables, hopefully reducing file size and making the code
// make more sense.
// PARAMATER BREAKDOWN:
// statevar: the state variable being used. This should be a boolean.
// setStateVar: the state variable being used's changer function
// id: id for the display value.
export function PlusMinusComponent({statevar, setStateVar, id}) {
  return(
    <div>
      <b id={id}>
        {statevar} 
      </b><br></br><br></br>
      <button onClick={() => setStateVar(statevar + 1)} className='plusminus-button'>
        +
      </button>
      <button onClick={() => setStateVar(statevar - 1)} className='plusminus-button'>
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
export function CheckboxComponent({statevar, setStateVar, id}) {
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
/*
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
} */
  
// function for saving to local storage. should be used when the http request fails, not
// implemented yet.
/*export function saveStand(e) {
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
*/

/*function SubmitButton() {
  return (
  <button onClick={bigSubmitStand} id='submit-button'>Submit</button>
  );
}*/

export function Stand() {
  const [autoamp, setAutoamp] = useState(0);
  const [autospeaker, setAutospeaker] = useState(0);
  const [left_zone, setLeftZone] = useState(false);
  const [teleamp, setTeleamp] = useState(0); 
  const [telespeaker_unamplified, setTelespeakerUnamplified] = useState(0);
  const [telespeaker_amplified, setTelespeakerAmplified] = useState(0);
  const [trap, setTrap] = useState(0);
  const [drops, setDrops] = useState(0);
  const [climbed, setClimbed] = useState(false);
  const [parked, setParked] = useState(false);
  const [harmony, setHarmony] = useState(false);
  const [offeredcoop, setOfferedCoop] = useState(false);
  const [didcoop, setDidCoop] = useState(false);
  const [ampmike, setAmpMike] = useState(false);
  const [sourcemike, setSourceMike] = useState(false);
  const [centermike, setCenterMike] = useState(false);
  function bigSubmitStand() {
    uploadStand(window.event);
    //saveStand(window.event);
    /*try {
      uploadStand();
    } catch(err) {
      saveStand();
    }*/
  }
  function uploadStand(e) {
    e.preventDefault();
      fetch("http://98.59.100.219:3082/matchinput", {
         method: 'POST',
         mode: "no-cors",
         credentials: 'include',
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
            teleSpeakerPoints: telespeaker_unamplified,
            teleSpeakerAmplifiedNotes: telespeaker_amplified,
            drops: drops,
            climbed: climbed,
            parked: parked,
            harmony: harmony,
            trap: trap,
            offeredcoop: offeredcoop,
            didcoop: didcoop,
            ampmike: ampmike,
            sourcemike: sourcemike,
            centermike: centermike,
         })})
    }
  return (
    <div className='stand-container'>
      <div className='basic-info'>
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
      </div>
      <div className='auto-div'>
        <h2 className='auto-points-text'>Auto Points</h2>
         <h3 className='auto-amp-text'>Amp score</h3>
            <PlusMinusComponent statevar={autoamp} setStateVar={setAutoamp} id={"amp-score"}/>
         <h3 className='auto-speaker-text'>Speaker score</h3>
            <PlusMinusComponent statevar={autospeaker} setStateVar={setAutospeaker} id={"speaker-score"}/>
         <h3 className='left-zone-text'>Left zone</h3>
            <CheckboxComponent statevar={left_zone} setStateVar={setLeftZone} id={"leftzone-cb"}/>
      </div>
      <div className='tele-div'>
      <h2 className='teleop-points-text'>Teleop Points</h2>
        <h3 className='teleop-amp-text'>Amp score</h3>
            <PlusMinusComponent statevar={teleamp} setStateVar={setTeleamp} id={"teleamp"}/>
        <h3 className='teleop-speaker-text1'>Unamplified Speaker Score</h3>
            <PlusMinusComponent statevar={telespeaker_unamplified} setStateVar={setTelespeakerUnamplified} id={"telespeaker-u"}/>
        <h3 className='teleop-speaker-text2'>Amplified Speaker Score</h3>
            <PlusMinusComponent statevar={telespeaker_amplified} setStateVar={setTelespeakerAmplified} id={"telespeaker-a"}/>
        <h3 className='trapscore-text'>Trap score</h3>
            <PlusMinusComponent statevar={trap} setStateVar={setTrap} id={"trap-score"}/>
        <h3 className='drops-text'>Drops</h3>
            <PlusMinusComponent statevar={drops} setStateVar={setDrops} id={"drops-score"}/>
      </div>
      <div className='endgame-div'>
        <h2 className='endgame-text'>End game</h2>
          <h3 className='climbed-text'>Robot climbed</h3>
              <CheckboxComponent statevar={climbed} setStateVar={setClimbed} id={"climbed-cb"}/>
         <h3 className='parked-text'>Robot parked</h3>
              <CheckboxComponent statevar={parked} setStateVar={setParked} id={"parked_cb"}/>
         <h2 className='coop-text'>Co-op</h2>
            <h3 className='coop-offer-text'>Offered Co-op</h3>
              <CheckboxComponent statevar={offeredcoop} setStateVar={setOfferedCoop} id={"offered-coop-cb"}/>
            <h3 className='coop-did-text'>Did Co-op</h3>
              <CheckboxComponent statevar={didcoop} setStateVar={setDidCoop} id={"did-coop-cb"}/>
         <h2 className='mike-text'>Mike</h2>
            <h3 className='ampmike-text'>Scored Amp Mike</h3>
              <CheckboxComponent statevar={ampmike} setStateVar={setAmpMike} id={"scored-amp-mike-cb"}/>
            <h3 className='ampmike-text'>Scored Source Mike</h3>
              <CheckboxComponent statevar={sourcemike} setStateVar={setSourceMike} id={"scored-source-mike-cb"}/>
            <h3 className='ampmike-text'>Scored Center Mike</h3>
              <CheckboxComponent statevar={centermike} setStateVar={setCenterMike} id={"scored-center-mike-cb"}/>
            <h3 className='harmony-text'>Got harmony</h3>
              <CheckboxComponent statevar={harmony} setStateVar={setHarmony} id={"harmony-cb"}/>
      </div>
      <button onClick={bigSubmitStand} id='submit-button'>Submit</button>
    </div>
  );
}


