import './App.css';
//import { Container } from "reactstrap";

let alliance;
let autoamp = 0;
let autospeaker = 0;
let teleamp = 0;
let telespeaker_u = 0;
let telespeaker_a = 0;

//function to change any of the above variables and their associated texts
// PARAMETERS NEED TO BE STRINGS
function changeValue(operation,variable,textelement) {
  if (operation === "add") {
      variable = variable + 1;
  } else if (operation === "subtract") {
      variable = variable - 1;
  }
  console.log(variable);
}

function redbtnfunc() {
  alliance = "red";
  console.log(alliance);
}

function bluebtnfunc() {
  alliance = "blue";
  console.log(alliance);
}

function App() {
  return (
      <div class='container'>
        <h2 class="basicinfo-text">Team Info</h2>
        <h3 class='tn-text'>Team Number</h3>
          <input type='text'></input>
        <h3 class='alliance-text'>Alliance</h3>
          <button onClick={redbtnfunc} className='red-btn'>Red</button>
          <button onClick={bluebtnfunc} className='blue-btn'>Blue</button>

      <h2 class='auto-points-text'>Auto Points</h2>
        <h3 class='left-start'>Robot left start</h3>
        <input class="left-start-cb" type="checkbox"/>
        <h3 class='auto-amp-text'>Amp score</h3>
          <button onClick={changeValue(autoamp,"add")} class='normal-button'>+</button>
          <button onClick={changeValue(autoamp,"subtract")} class='normal-button'>-</button>
        <h3 class='auto-speaker-text'>Speaker score</h3>
          <button onClick={changeValue(autospeaker,"add")} class='normal-button'>+</button>
          <button onClick={changeValue(autospeaker,"subtract")} class='normal-button'>-</button>

      <h2 class='teleop-points-text'>Teleop Points</h2>
        <h3 class='teleop-amp-text'>Amp score</h3>
          <button onClick={changeValue(teleamp,"add")} class='teleop-amp-btn1'>+</button>
          <button onClick={changeValue(teleamp,"subtract")} class='teleop-amp-btn2'>-</button>
        <h3 class='teleop-speaker-text1'>Unamplified Speaker Score</h3>
          <button onClick={changeValue(telespeaker_u,"add")} class='teleop-u-speaker-btn1'>+</button>
          <button onClick={changeValue(telespeaker_u,"subtract")} class='teleop-u-speaker-btn2'>-</button>
        <h3 class='teleop-speaker-text2'>Amplified Speaker Score</h3>
          <button onClick={changeValue(telespeaker_a,"add")} class='teleop-a-speaker-btn1'>+</button>
          <button onClick={changeValue(telespeaker_a,"subtract")} class='teleop-a-speaker-btn2'>-</button>
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