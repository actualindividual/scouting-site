import './App.css';
//import { useState } from 'react';

let alliance;
let team;
let matchnum = 0;
let ranking_points = 0;
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
function button_handler11() {
  ranking_points = ranking_points + 1;
  console.log(ranking_points);
}
function button_handler12() {
  ranking_points = ranking_points - 1;
  console.log(ranking_points);
}

function submitHandler() {
  let team = document.getElementById('team-input');
  let match = document.getElementById('match-input');
}

// used to be in a seperate file but that did not work
function handleSubmit(e) {
  e.preventDefault();
  fetch('address here ghhghghghhgg', {
     method: 'POST',
     // update backend plz
     body: JSON.stringify({
        team: team,
        matchNumber: matchnum,
        alliance: alliance,
        autoAmp: autoamp,
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
  )
}

function App() {
  return (
      <div class='container'>
        <h2 class="basicinfo-text">Basic Info</h2>
        <h3 class='matchnumber-text'>Match Number</h3>
          <MatchNumInput />
        <h3 class='tn-text'>Team Number</h3>
          <input type='text' id='team-input'></input>
        <h3 class='alliance-text'>Alliance</h3>
          <RedButton />
          <BlueButton />

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
        <h3 class='rp-text1'>Ranking Points</h3>
        <b id='rp-text2'>{ranking_points}</b> <br></br><br></br>
          <button onClick={button_handler11} class='normal_button' id='rp+'>+</button>
          <button onClick={button_handler12} class='normal_button' id='rp-'>-</button>
        <br></br>
        <br></br>
        <input onclick={submitHandler} type='submit'/>
        <button onclick={handleSubmit}>super cool temporary button</button>
        <br></br>
        <br></br>
    </div>
  );
}

export default App;