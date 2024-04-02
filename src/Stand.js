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

export function AutoAmpComponent() {
  const [autoamp, setAutoamp] = useState(0);
  return(
    <div>
      <b id='autoampdisp'>
        {autoamp}
      </b><br></br><br></br>
      <button onClick={() => setAutoamp(autoamp + 1)} className='normal-button'>
        +
      </button>
      <button onClick={() => setAutoamp(autoamp - 1)} className='normal-button'>
        -
      </button>
    </div>
  );
}

export function AutoSpeakerComponent() {
  const [autospeaker, setAutospeaker] = useState(0);
  return(
    <div>
      <b id='autospeakerdisp'>
        {autospeaker}
      </b><br></br><br></br>
      <button onClick={() => setAutospeaker(autospeaker + 1)} className='normal-button'>
        +
      </button>
      <button onClick={() => setAutospeaker(autospeaker - 1)} className='normal-button'>
        -
      </button>
    </div>
  );
}

export function LeftZoneComponent() {
  const [left_zone, setLeftZone] = useState(Boolean);
  return (
  <input
  type="checkbox"
  onChange={handleLeftZone}
  value={left_zone}
  id="zone-checkbox"
  name="lz-cb"
  />
  );
  function handleLeftZone() {
    if (document.getElementById('zone-checkbox').value === true) {setLeftZone(true);}
    else if (document.getElementById('zone-checkbox').value === false) {setLeftZone(false);}
  }
}

export function TeleAmpComponent() {
  const [teleamp, setTeleamp] = useState(0);
  return(
    <div>
      <b id='teleampdisp'>
        {teleamp}
      </b><br></br><br></br>
      <button onClick={() => setTeleamp(teleamp + 1)} className='normal-button'>
        +
      </button>
      <button onClick={() => setTeleamp(teleamp - 1)} className='normal-button'>
        -
      </button>
    </div>
  );
}

export function TeleSpeakerUnamplifiedComponent() {
  const [telespeaker_unamplified, setTelespeakerUnamplified] = useState(0);
  return(
    <div>
      <b id='telespeakerunampdisp'>
        {telespeaker_unamplified}
      </b><br></br><br></br>
      <button onClick={() => setTelespeakerUnamplified(telespeaker_unamplified + 1)} className='normal-button'>
        +
      </button>
      <button onClick={() => setTelespeakerUnamplified(telespeaker_unamplified - 1)} className='normal-button'>
        -
      </button>
    </div>
  );
}

export function TeleSpeakerAmplifiedComponent() {
  const [telespeaker_amplified, setTelespeakerAmplified] = useState(0);
  return(
    <div>
      <b id='telespeakerampdisp'>
        {telespeaker_amplified}
      </b><br></br><br></br>
      <button onClick={() => setTelespeakerAmplified(telespeaker_amplified + 1)} className='normal-button'>
        +
      </button>
      <button onClick={() => setTelespeakerAmplified(telespeaker_amplified - 1)} className='normal-button'>
        -
      </button>
    </div>
  );
}

export function TrapComponent() {
  const [trap, setTrap] = useState(0);
  return(
    <div>
      <b id='trapdisp'>
        {trap}
      </b><br></br><br></br>
      <button onClick={() => setTrap(trap + 1)} className='normal-button'>
        +
      </button>
      <button onClick={() => setTrap(trap - 1)} className='normal-button'>
        -
      </button>
    </div>
  );
}

export function DropsComponent() {
  const [drops, setDrops] = useState(0);
  return(
    <div>
      <b id='dropsdisp'>
        {drops}
      </b><br></br><br></br>
      <button onClick={() => setDrops(drops + 1)} className='normal-button'>
        +
      </button>
      <button onClick={() => setDrops(drops - 1)} className='normal-button'>
        -
      </button>
    </div>
  );
}

// in all honesty these should just be one component with changable state values
export function ClimbedComponent() {
  const [climbed, setClimbed] = useState(Boolean);
  return (
  <input
  type="checkbox"
  onChange={handleClimbed}
  value={climbed}
  id="climbed-checkbox"
  name="climb-cb"
  />
  );
  function handleClimbed() {
    if (document.getElementById('climbed-checkbox').value === true) {setClimbed(true);}
    else if (document.getElementById('climbed-checkbox').value === false) {setClimbed(false);}
  }
}

export function ParkedComponent() {
  const [parked, setParked] = useState(Boolean);
  return (
  <input
  type="checkbox"
  onChange={handleParked}
  value={parked}
  id="parked-checkbox"
  name="park-box"
  />
  );
  function handleParked() {
    if (document.getElementById('parked-checkbox').value === true) {setParked(true);}
    else if (document.getElementById('parked-checkbox').value === false) {setParked(false);}
  }
}

export function HarmonyComponent() {
  const [harmony, setHarmony] = useState(Boolean);
  return (
  <input
  type="checkbox"
  onChange={handleHarmony}
  value={harmony}
  id="harmony-checkbox"
  name="harm-box"
  />
  );
  function handleHarmony() {
    if (document.getElementById('harmony-checkbox').value === true) {setHarmony(true);}
    else if (document.getElementById('harmony-checkbox').value === false) {setHarmony(false);}
  }
}

export function OfferedCoopComponent() {
  const [offeredcoop, setOfferedCoop] = useState(Boolean);
  return (
  <input
  type="checkbox"
  onChange={handleOfferedCoop}
  value={offeredcoop}
  id="off-coop-checkbox"
  name="off-coop-box"
  />
  );
  function handleOfferedCoop() {
    if (document.getElementById('off-coop-checkbox').value === true) {setOfferedCoop(true);}
    else if (document.getElementById('off-coop-checkbox').value === false) {setOfferedCoop(false);}
  }
}

export function DidCoopComponent() {
  const [didcoop, setDidCoop] = useState(Boolean);
  return (
  <input
  type="checkbox"
  onChange={handleDidCoop}
  value={didcoop}
  id="did-coop-checkbox"
  name="did-coop-box"
  />
  );
  function handleDidCoop() {
    if (document.getElementById('off-coop-checkbox').value === true) {setDidCoop(true);}
    else if (document.getElementById('off-coop-checkbox').value === false) {setDidCoop(false);}
  }
}

// MIKE STUFF

export function AmpMikeComponent() {
  const [ampmike, setAmpMike] = useState(Boolean);
  return (
  <input
  type="checkbox"
  onChange={handleAmpMike}
  value={ampmike}
  id="ampmike-checkbox"
  name="ampmike-box"
  />
  );
  function handleAmpMike() {
    if (document.getElementById('ampmike-checkbox').value === true) {setAmpMike(true);}
    else if (document.getElementById('ampmike-checkbox').value === false) {setAmpMike(false);}
  }
}

export function SourceMikeComponent() {
  const [sourcemike, setSourceMike] = useState(Boolean);
  return (
  <input
  type="checkbox"
  onChange={handleSourceMike}
  value={sourcemike}
  id="sourcemike-checkbox"
  name="sourcemike-box"
  />
  );
  function handleSourceMike() {
    if (document.getElementById('sourcemike-checkbox').value === true) {setSourceMike(true);}
    else if (document.getElementById('sourcemike-checkbox').value === false) {setSourceMike(false);}
  }
}

export function CenterMikeComponent() {
  const [centermike, setCenterMike] = useState(Boolean);
  return (
  <input
  type="checkbox"
  onChange={handleCenterMike}
  value={centermike}
  id="centermike-checkbox"
  name="centermike-box"
  />
  );
  function handleCenterMike() {
    if (document.getElementById('centermike-checkbox').value === true) {setCenterMike(true);}
    else if (document.getElementById('sourcemike-checkbox').value === false) {setCenterMike(false);}
  }
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


