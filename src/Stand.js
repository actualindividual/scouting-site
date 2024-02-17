import './Stand.css'
import { useState } from 'react';

// These are all collected from user through forms. If they aren't declared here the app throws an error
let alliance;
let team;
let left_zone;
let drops;
let scoutname;
let parked;
let climbed;
let harmony;
let trap;
// Do these need to be declared as integers as opposed to as any's? IDK...
let autoamp = 0;
let matchnum = 0;
let autospeaker = 0;
let teleamp = 0;
let telespeaker_a = 0;
let telespeaker_u = 0;



export function redbtnfunc() {
  alliance = "red";  
  console.log(alliance);
}
export function bluebtnfunc() {
  alliance = "blue";
  console.log(alliance);
}

export function submitHandler() {
  let team = document.getElementById('team-input');
  console.log("jaskjaskjlaskjlaskjl");
  let match = document.getElementById('match-input');
  let scoutname = document.getElementById('scoutname-input');
}

export function RedButton() {
  return(
    <button onClick={redbtnfunc} class='red-btn'>
      Red
    </button>
  );
}
export function BlueButton() {
  return(
    <button onClick={bluebtnfunc} class='blue-btn'>
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
    <input type='text'>
    </input>
  );
}

export function TeamNumInput() {
  return (
    <input type='text' id='tn_input'>
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
      <button onClick={() => setAutoamp(autoamp + 1)} class='normal-button'>
        +
      </button>
      <button onClick={() => setAutoamp(autoamp - 1)} class='normal-button'>
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
      <button onClick={() => setAutospeaker(autospeaker + 1)} class='normal-button'>
        +
      </button>
      <button onClick={() => setAutospeaker(autospeaker - 1)} class='normal-button'>
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
      <button onClick={() => setTeleamp(teleamp + 1)} class='normal-button'>
        +
      </button>
      <button onClick={() => setTeleamp(teleamp - 1)} class='normal-button'>
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
      <button onClick={() => setTelespeakerUnamplified(telespeaker_unamplified + 1)} class='normal-button'>
        +
      </button>
      <button onClick={() => setTelespeakerUnamplified(telespeaker_unamplified - 1)} class='normal-button'>
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
      <button onClick={() => setTelespeakerAmplified(telespeaker_amplified + 1)} class='normal-button'>
        +
      </button>
      <button onClick={() => setTelespeakerAmplified(telespeaker_amplified - 1)} class='normal-button'>
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
      <button onClick={() => setTrap(trap + 1)} class='normal-button'>
        +
      </button>
      <button onClick={() => setTrap(trap - 1)} class='normal-button'>
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
      <button onClick={() => setDrops(drops + 1)} class='normal-button'>
        +
      </button>
      <button onClick={() => setDrops(drops - 1)} class='normal-button'>
        -
      </button>
    </div>
  );
}

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

// used to be in a seperate file but that did not work
export function uploadStand(e) {
  e.preventDefault();
  fetch('http://localhost:65535', {
     method: 'POST',
     body: JSON.stringify({
        scoutname: scoutname,  
        team: team,
        matchNumber: matchnum,
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
     }),
     headers: {
        'Content-type': 'application/json; charset=UTF-8',
     },
  })
     //.then((res) => res.json())
     //.then((post) => {
      //  setPosts((posts) => [post, ...posts]);
      //  setTitle('');
      //  setBody('');
     //})
     .catch((err) => {
        console.log(err.message);
     });
}

export function Stand() {
  return (
      <div class='container'>
        <h1>Stand Scouting</h1>
        <h2 class="basicinfo-text">Basic Info</h2>
        <h3 class='scout-name'>Scout name</h3>
          <ScoutNameInput />
        <h3 class='matchnumber-text'>Match Number</h3>
          <MatchNumInput />
        <h3 class='tn-text'>Team Number</h3>
          <TeamNumInput />
        <h3 class='alliance-text'>Alliance</h3>
          <RedButton />
          <BlueButton />

      <h2 class='auto-points-text'>Auto Points</h2>
        <h3 class='auto-amp-text'>Amp score</h3>
            <AutoAmpComponent />
        <h3 class='auto-speaker-text'>Speaker score</h3>
            <AutoSpeakerComponent />
        <h3 class='left-zone-text'>Left zone</h3>
            <LeftZoneComponent />

      <h2 class='teleop-points-text'>Teleop Points</h2>
        <h3 class='teleop-amp-text'>Amp score</h3>
            <TeleAmpComponent />
        <h3 class='teleop-speaker-text1'>Unamplified Speaker Score</h3>
            <TeleSpeakerUnamplifiedComponent />
        <h3 class='teleop-speaker-text2'>Amplified Speaker Score</h3>
            <TeleSpeakerAmplifiedComponent />
        <h3 class='trapscore-text'>Trap score</h3>
            <TrapComponent />
        <h3 class='drops-text'>Number of times bot dropped note</h3>
            <DropsComponent />
        <h3 class='climbed-text'>Robot climbed</h3>
            <ClimbedComponent />
        <h3 class='parked-text'>Robot parked</h3>
            <ParkedComponent />
        <h3 class='harmony-text'>Robot got harmony</h3>
            <HarmonyComponent />
    </div>
  );
}
