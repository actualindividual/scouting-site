import './App.css';
import { Text } from 'react-native-web';
import { useState } from 'react';

let alliance;
let team;
let matchnum = 0;
let ranking_points = 0;
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

// Old button handler functions from before full* conversion to react components,
// kept them for reference mainly

/* function button_handler1() {
  autoamp = autoamp + 1;
  console.log(autoamp);
} 
function button_handler2() {
  autoamp = autoamp - 1;
  console.log(autoamp);
} 
function button_handler3() {
  autospeaker = autospeaker + 1;
  console.log(autospeaker);
}
function button_handler4() {
  autospeaker = autospeaker - 1;
  console.log(autospeaker);
}
function button_handler5() {
  teleamp = teleamp + 1;
  console.log(teleamp);
}
function button_handler6() {
  teleamp = teleamp - 1;
  console.log(teleamp);
}
function button_handler7() {
  telespeaker_u = telespeaker_u + 1;
  console.log(telespeaker_u);
}
function button_handler8() {
  telespeaker_u = telespeaker_u - 1;
  console.log(telespeaker_u); 
}
function button_handler9() {
  telespeaker_a = telespeaker_a + 1;
  console.log(telespeaker_a);
}
function button_handler10() {
  telespeaker_a = telespeaker_a - 1;
  console.log(telespeaker_a);
}
function button_handler11() {
  ranking_points = ranking_points + 1;
  console.log(ranking_points);
}
function button_handler12() {
  ranking_points = ranking_points - 1;
  console.log(ranking_points);
} */

function submitHandler() {
  let team = document.getElementById('team-input');
  let match = document.getElementById('match-input');
}

// used to be in a seperate file but that did not work
function handleSubmit(e) {
  e.preventDefault();
  fetch('http://localhost:65535', {
     method: 'POST',
     // update backend plz
     body: JSON.stringify({
        team: team,
        matchNumber: matchnum,
        alliance: alliance,
        //autoAmp: autoamp,
        autoSpeaker: autospeaker,
        teleAmp: teleamp,
        teleSpeakerUnamp: telespeaker_u,
        teleSpeakerAmp: telespeaker_a,
        rankingPoints: ranking_points,
        //other stuff goes here
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

// rewriting the entire app in react components why did i not do this originaly aaaa

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
function LeftStartCb() {
  return(
    <input class="left-start-cb" type='checkbox'>
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
        <h3 class='matchnumber-text'>Match Number</h3>
          <MatchNumInput />
        <h3 class='tn-text'>Team Number</h3>
          <TeamNumInput />
        <h3 class='alliance-text'>Alliance</h3>
          <RedButton />
          <BlueButton />

      <h2 class='auto-points-text'>Auto Points</h2>
        <h3 class='left-start'>Robot left start</h3>
          <LeftStartCb />
        <h3 class='auto-amp-text'>Amp score</h3>
            <AutoAmpComponent />
        <h3 class='auto-speaker-text'>Speaker score</h3>
            <AutoSpeakerComponent />

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