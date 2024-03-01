import data from './config.json';
import './Pit.css'; // I can't style the react-select boxes for some reason, and their docs are no help
import { useState } from 'react';
import Select from 'react-select';
import { TeamNumInput, ScoutNameInput } from './Stand.js';
import data from './config.json';
//import { upload } from '@testing-library/user-event/dist/types/utility/upload.js';

// defining them so it doesn't throw an error 

let team_num;
let scoutname;
let drive_type;
let intake_type;
let defense;
let speaker;
let climb = Boolean;
let best_auto = String;
let harmony = Boolean;
let understage = Boolean;
let trap = Boolean;
let extra_notes = String;


function handlePitSubmitPart1() {
	let team_num = document.getElementById('tn_input');
	let scoutname = document.getElementById('scoutname-input');
	let drive_type = document.getElementById('drive-type-dropdown');
	let intake_type = document.getElementById('intake-type-dropdown');
	let extra_notes = document.getElementById('scout-comments');
	let best_auto = document.getElementById('best-auto-input');
}
function uploadPit(e) {
	//e.preventDefault();
	fetch(data.address, {
	   method: 'POST',
	   body: JSON.stringify({
		teamNumber: team_num,
		scoutName: scoutname,
		driveType: drive_type,
		intake: intake_type,
		bestAuto: best_auto, 
		defense: defense,
		speaker: speaker, 
		climb: climb, 
		harmony: harmony, 
		underStage: understage, 
		trap: trap, 
		extraNotes: extra_notes
		})
	})
}

function bigSubmit() {
	handlePitSubmitPart1();
	uploadPit(window.event);
}

const dtc_options = [
	{ value : 'tank', label: 'Tank'},
	{ value : 'swerve', label: 'Swerve'},
	{ value : 'omni', label: 'Omni'},
	{ value : 'mecanum', label: 'Mecanum'},
	{ value : 'other', label: 'Other'}
]
const intake_options = [ 
	{ value : 'ground', label: 'Ground'},
	{ value : 'source', label: 'Source'}
]


function DefenseComponent() {
	const [defense, setDefense] = useState(Boolean);
	return (
	<input
	type="checkbox"
	onChange={handleDefense}
	value={defense}
	id="defense-checkbox"
	name="defense-cb"
	/>
	);
	function handleDefense() {
	  if (document.getElementById('defense-checkbox').value === true) {setDefense(true);}
	  else if (document.getElementById('defense-checkbox').value === false) {setDefense(false);}
	}
  }
function SpeakerComponent() {
	const [speaker, setSpeaker] = useState(Boolean);
	return (
	<input
	type="checkbox"
	onChange={handleSpeaker}
	value={speaker}
	id="speaker-checkbox"
	name="speaker-cb"
	/>
	);
	function handleSpeaker() {
	  if (document.getElementById('speaker-checkbox').value === true) {setSpeaker(true);}
	  else if (document.getElementById('speaker-checkbox').value === false) {setSpeaker(false);}
	}
}
function ClimbComponent() {
	const [climb, setClimb] = useState(Boolean);
	return (
	<input
	type="checkbox"
	onChange={handleClimb}
	value={climb}
	id="climb-checkbox"
	name="climb-cb"
	/>
	);
	function handleClimb() {
	  if (document.getElementById('climb-checkbox').value === true) {setClimb(true);}
	  else if (document.getElementById('climb-checkbox').value === false) {setClimb(false);}
	}
}
function HarmonyComponent() {
	const [harmony, setHarmony] = useState(Boolean);
	return (
	<input
	type="checkbox"
	onChange={handleHarmony}
	value={harmony}
	id="harmony-checkbox"
	name="harmony-cb"
	/>
	);
	function handleHarmony() {
	  if (document.getElementById('harmony-checkbox').value === true) {setHarmony(true);}
	  else if (document.getElementById('harmony-checkbox').value === false) {setHarmony(false);}
	}
}
function UnderStageComponent() {
	const [understage, setUnderStage] = useState(Boolean);
	return (
	<input
	type="checkbox"
	onChange={handleUnderStage}
	value={understage}
	id="under-stage-checkbox"
	name="us-cb"
	/>
	);
	function handleUnderStage() {
	  if (document.getElementById('under-stage-checkbox').value === true) {setUnderStage(true);}
	  else if (document.getElementById('under-stage-checkbox').value === false) {setUnderStage(false);}
	}
}
function TrapComponent() {
	const [trap, setTrap] = useState(Boolean);
	return (
	<input
	type="checkbox"
	onChange={handleTrap}
	value={trap}
	id="trap-checkbox"
	name="trap-cb"
	/>
	);
	function handleTrap() {
	  if (document.getElementById('trap-checkbox').value === true) {setTrap(true);}
	  else if (document.getElementById('trap-checkbox').value === false) {setTrap(false);}
	}
}
function CommentsComponent() {
	return (
		<textarea id="scout-comments" />
	);
}

function SubmitButton() {
	return (
		<button onClick={bigSubmit} id='submit-button'>Submit</button>
	);
}

export function Pit() { // Component function for pit ui
	return (
		<div className='pit-component'>
			<h1>Pit scouting</h1>
				<h2>Basic Info</h2>
					<h3 className='tn-text'>Team Number</h3>
						<TeamNumInput />
					<h3 className='scouter-name-text'>Scouter Name</h3>
						<ScoutNameInput />
					<h3 className='drive-text'>Drive</h3>
						<Select className='dropdown' id='drive-type-dropdown' options={dtc_options} />
					<h3 className='intake-text'>Intake</h3>
						<Select className='dropdown' id='intake-type-dropdown' options={intake_options} />
					<h3 className='best-auto-text'>Best Auto</h3>
						<input className='ba-text' id='best-auto-input' />
					<h3 className='defense-text'>Defense?</h3>
						<DefenseComponent />
					<h3 className='speaker-text'>Speaker?</h3>
						<SpeakerComponent />
					<h3 className='climb-text'>Can climb?</h3>
						<ClimbComponent />
					<h3 className='harmony-text'>Can do harmony?</h3>
						<HarmonyComponent />
					<h3 className='under-stage-text'>Can go under stage?</h3>
						<UnderStageComponent />
					<h3 className='trap-text'>Can do trap?</h3>
						<TrapComponent />
					<h3 className='comments-text'>Additional Comments</h3>
						<CommentsComponent />
						<br></br><br></br>
						<SubmitButton />
						<br></br>
		</div> 
	);

}

function uploadPit(e) {
	e.preventDefault();
	fetch(data.address, {
	   method: 'POST',
	   body: JSON.stringify({
		username: localStorage.getItem('username').value,
        email: localStorage.getItem('email').value,
        password: localStorage.getItem('password').value, // should be hashed
		teamNumber: team_num,
		scoutName: scoutname,
		driveType: drive_type,
		intake: intake_type,
		bestAuto: best_auto, 
		defense: defense,
		speaker: speaker, 
		climb: climb, 
		harmony: harmony, 
		underStage: understage, 
		trap: trap, 
		extraNotes: extra_notes
		})
	})
	.then (
		function(response) {
		  if (response.status !== 200) {
		  console.log('Looks like there was a problem. Status Code: ' +
			  response.status);
		  return;
		  }
		}
	   )
	
	
}