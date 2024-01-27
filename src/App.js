import './App.css';
//import { useState } from 'react';

let alliance;
let autoamp = 0;
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

//naming button handlers like this is probably not good practice
//but it works so...

function button_handler1() {
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

function App() {
  //const [autoamp, setAutoAmp] = useState(0);
  //const [autospeaker, setAutoSpeaker] = useState(0);
  //const [teleamp, setTeleAmp] = useState(0);
  //const [telespeaker_u, setTeleSpeakerU] = useState(0);
  //const [telespeaker_a, setTeleSpeakerA] = useState(0);

  return (
      <div class='container'>
        <h2 class="basicinfo-text">Basic Info</h2>
        <h3 class='matchnumber-text'>Match Number</h3>
          <input type='text'></input>
        <h3 class='tn-text'>Team Number</h3>
          <input type='text'></input>
        <h3 class='alliance-text'>Alliance</h3>
          <button onClick={redbtnfunc} className='red-btn'>Red</button>
          <button onClick={bluebtnfunc} className='blue-btn'>Blue</button>

      <h2 class='auto-points-text'>Auto Points</h2>
        <h3 class='left-start'>Robot left start</h3>
        <input class="left-start-cb" type="checkbox"/>
        <h3 class='auto-amp-text'>Amp score</h3>
            <b id='autoamptext'>{autoamp}</b> <br></br><br></br>
          <button onClick={button_handler1} class='normal-button' id='autoamp+'>+</button>
          <button onClick={button_handler2} class='normal-button' id='autoamp-'>-</button>
        <h3 class='auto-speaker-text'>Speaker score</h3>
            <b id='autospeakertext'>{autospeaker}</b> <br></br><br></br>
          <button onClick={button_handler3} class='normal-button' id='autospeaker+'>+</button>
          <button onClick={button_handler4} class='normal-button' id='autospeaker-'>-</button>

      <h2 class='teleop-points-text'>Teleop Points</h2>
        <h3 class='teleop-amp-text'>Amp score</h3>
            <b id='teleamptext'>{teleamp}</b> <br></br><br></br>
          <button onClick={button_handler5} class='normal-button' id='teleamp+'>+</button>
          <button onClick={button_handler6} class='normal-button' id='teleamp-'>-</button>
        <h3 class='teleop-speaker-text1'>Unamplified Speaker Score</h3>
            <b id='teleamptext1'>{telespeaker_u}</b> <br></br><br></br>
          <button onClick={button_handler7} class='normal-button' id='telespeaker_u+'>+</button>
          <button onClick={button_handler8} class='normal-button' id='telespeaker_u-'>-</button>
        <h3 class='teleop-speaker-text2'>Amplified Speaker Score</h3>
            <b id='teleamptext2'>{telespeaker_a}</b> <br></br><br></br>
          <button onClick={button_handler9} class='normal_button' id='telespeaker_a+'>+</button>
          <button onClick={button_handler10} class='normal_button' id='telespeaker_a-'>-</button>
        <h3>Coopertition Point</h3>
        <input class="checkbox" type="checkbox"/>
        <br></br>
        <br></br>
        <input type='submit'/>
        <br></br>
        <br></br>
    </div>
  );
}

export default App;