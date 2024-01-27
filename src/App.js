import './App.css';
import { useState } from 'react';

let alliance;

function redbtnfunc() {
  alliance = "red";  
  console.log(alliance);
}
function bluebtnfunc() {
  alliance = "blue";
  console.log(alliance);
}


function App() {
  const [autoamp, setAutoAmp] = useState(0);
  const [autospeaker, setAutoSpeaker] = useState(0);
  const [teleamp, setTeleAmp] = useState(0);
  const [telespeaker_u, setTeleSpeakerU] = useState(0);
  const [telespeaker_a, setTeleSpeakerA] = useState(0);


  function buttonHandlerPositive(e) {
    if (e.target.id === 'autoamp+') {
      setAutoAmp(autoamp + 1);
    } else if (e.target.id === "autospeaker+") {
      setAutoSpeaker(autospeaker + 1);
    } else if (e.target.id === 'teleamp+') {
      setTeleAmp(teleamp + 1);
    } else if (e.target.id === 'telespeaker_u+') {
      setTeleSpeakerU(telespeaker_u + 1);
    } else if (e.target.id === 'telespeaker_a+') {
      setTeleSpeakerA(telespeaker_a + 1);
    }
  }
  
  function buttonHandlerNegative(e) {
    if (e.target.id === 'autoamp-') {
      setAutoAmp(autoamp - 1);
    } else if (e.target.id === "autospeaker-") {
      setAutoSpeaker(autospeaker - 1);
    } else if (e.target.id === 'teleamp-') {
      setTeleAmp(teleamp - 1);
    } else if (e.target.id === 'telespeaker_u-') {
      setTeleSpeakerU(telespeaker_u - 1);
    } else if (e.target.id === 'telespeaker_a-') {
      setTeleSpeakerA(telespeaker_a - 1);
    }
  }
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
          <button onClick={e => buttonHandlerPositive} class='normal-button' id='autoamp+'>+</button>
          <button onClick={e => buttonHandlerNegative} class='normal-button' id='autoamp-'>-</button>
        <h3 class='auto-speaker-text'>Speaker score</h3>
            <b id='autospeakertext'>{autospeaker}</b> <br></br><br></br>
          <button onClick={e => buttonHandlerPositive} class='normal-button' id='autospeaker+'>+</button>
          <button onClick={e => buttonHandlerNegative} class='normal-button' id='autospeaker-'>-</button>

      <h2 class='teleop-points-text'>Teleop Points</h2>
        <h3 class='teleop-amp-text'>Amp score</h3>
            <b id='teleamptext'>{teleamp}</b> <br></br><br></br>
          <button onClick={e => buttonHandlerPositive} class='normal-button' id='teleamp+'>+</button>
          <button onClick={e => buttonHandlerNegative} class='normal-button' id='teleamp-'>-</button>
        <h3 class='teleop-speaker-text1'>Unamplified Speaker Score</h3>
            <b id='teleamptext1'>{telespeaker_u}</b> <br></br><br></br>
          <button onClick={e => buttonHandlerPositive} class='normal-button' id='telespeaker_u+'>+</button>
          <button onClick={e => buttonHandlerNegative} class='normal-button' id='telespeaker_u-'>-</button>
        <h3 class='teleop-speaker-text2'>Amplified Speaker Score</h3>
            <b id='teleamptext2'>{telespeaker_a}</b> <br></br><br></br>
          <button onClick={e => buttonHandlerPositive} class='normal_button' id='telespeaker_a+'>+</button>
          <button onClick={e => buttonHandlerNegative} class='normal_button' id='telespeaker_a-'>-</button>
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