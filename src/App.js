import './App.css';
import { Text } from 'react-native-web';
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



function redbtnfunc() {
  alliance = "red";  
  console.log(alliance);
}
function bluebtnfunc() {
  alliance = "blue";
  console.log(alliance);
}

// Old (bad) button handler code is no more

function submitHandler() {
  let team = document.getElementById('team-input');
  console.log("jaskjaskjlaskjlaskjl");
  let match = document.getElementById('match-input');
  let scoutname = document.getElementById('scoutname-input');
}

function RedButton() {
  return(
    <button onClick={redbtnfunc} class='red-btn'>
      Red
    </button>
  );
}
function BlueButton() {
  return(
    <button onClick={bluebtnfunc} class='blue-btn'>
      Blue
    </button>
  );
}
function ScoutNameInput() {
  return (
    <input type='text' id="scoutname-input">
    </input>
  );
}
function MatchNumInput() {
  return (
    <input type='text'>
    </input>
  );
}

function TeamNumInput() {
  return (
    <input type='text'>
    </input>
  );
}


function AutoAmpComponent() {
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

function AutoSpeakerComponent() {
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

function LeftZoneComponent() {
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

function TeleAmpComponent() {
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

function TeleSpeakerUnamplifiedComponent() {
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

function TeleSpeakerAmplifiedComponent() {
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

// Cooperition point checkbox handler. Probably not the best way to do this but it works
function CoopCheckboxComponent() {
  const [coopertition_point, setCoopPoint] = useState(false);
  return (
  <input
  type="checkbox"
  value={coopertition_point}
  onChange={handleCoopChange}
  id="coop-checkbox"
  name="subscribe" 
  />
  );
}
function handleCoopChange() {

}


function App() {
  return (
      <div class='container'>
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
        <h3>Coopertition Point</h3>
        <input class="coopertition_checkbox" type="checkbox"/>
        <h3 class='rp-text1'>Ranking Points</h3>
        <b id='rp-text2'>{ranking_points}</b> <br></br><br></br>
          <button onClick={button_handler11} class='normal_button' id='rp+'>+</button>
          <button onClick={button_handler12} class='normal_button' id='rp-'>-</button>
        <br></br>
        <br></br>
        <input onClick={submitHandler} type='submit'/>
        <button onClick={handleSubmit}>super cool temporary button click instead of submit</button>
        <br></br>
        <br></br>
    </div>
  );
}

export default App;