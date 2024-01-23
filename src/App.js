import './App.css';

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
    <div>
      <h2 className="basicinfo-text">Team Info</h2>
        <h3 className='tn-text'>Team Number</h3>
          <input type='text'></input>
        <h3 className='alliance-text'>Alliance</h3>
          <button onClick={redbtnfunc} className='red-btn'>Red</button>
          <button onClick={bluebtnfunc} className='blue-btn'>Blue</button>

      <h2 className='auto-points-text'>Auto Points</h2>
        <h3 className='left-start'>Robot left start</h3>
        <input className="left-start-cb" type="checkbox"/>
        <h3 className='auto-amp-text'>Amp score</h3>
          <button onClick={changeValue(autoamp,"add")} className='auto-amp-btn1'>+</button>
          <button onClick={changeValue(autoamp,"subtract")} className='auto-amp-btn2'>-</button>
        <h3 className='auto-speaker-text'>Speaker score</h3>
          <button onClick={changeValue(autospeaker,"add")} className='auto-speaker-btn1'>+</button>
          <button onClick={changeValue(autospeaker,"subtract")} className='auto-speaker-btn2'>-</button>

      <h2 className='teleop-points-text'>Teleop Points</h2>
        <h3 className='teleop-amp-text'>Amp score</h3>
          <button onClick={changeValue(teleamp,"add")} className='teleop-amp-btn1'>+</button>
          <button onClick={changeValue(teleamp,"subtract")} className='teleop-amp-btn2'>-</button>
        <h3 className='teleop-speaker-text1'>Unamplified Speaker Score</h3>
          <button onClick={changeValue(telespeaker_u,"add")} className='teleop-u-speaker-btn1'>+</button>
          <button onClick={changeValue(telespeaker_u,"subtract")} className='teleop-u-speaker-btn2'>-</button>
        <h3 className='teleop-speaker-text2'>Amplified Speaker Score</h3>
          <button onClick={changeValue(telespeaker_a,"add")} className='teleop-a-speaker-btn1'>+</button>
          <button onClick={changeValue(telespeaker_a,"subtract")} className='teleop-a-speaker-btn2'>-</button>
        <h3>Coopertition Point</h3>
        <input className="coop-checkbox" type="checkbox"/>
        
        <br></br>
        <br></br>
        <input type='submit' name='submithjasdaks'/>
        <br></br>
        <br></br>
    </div>
  );
}

export default App;