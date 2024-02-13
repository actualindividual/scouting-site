import './Pit.css'; // I can't style the react-select boxes for some reason, and their docs are no help
import { useState } from 'react';
import Select from 'react-select';
import { TeamNumInput, ScoutNameInput } from './Stand.js';

function handlePitSubmit() {
	let team_num = document.getElementById('tn_input');
	let scoutname = document.getElementById('scoutname-input');
	let drive_type = document.getElementById('drive-type-dropdown');
	let intake_type = document.getElementById('intake-type-dropdown');
	let extra_notes = document.getElementById('scout-comments');
}
export function uploadPit() {
    //teamNumber: team_num,
	//scoutName: scoutname,
	//driveType: drive_type,
	//intake: intake_type,
	//playstyle: String, <--*
	//bestAuto: String, <--*
	//defense: defense,
	//speaker: speaker, 
	//climb: climb, 
	//harmony: harmony, 
	//underStage: Bool, <--
	//trap: Bool, <--
	//extraNotes: extra_notes
}

const dtc_options = [
	{ value : 'tank', label: 'Tank'},
	{ value : 'swerve', label: 'Swerve'},
	{ value : 'omni', label: 'Omni'},
	{ value : 'mecanum', label: 'Mecanum'}
]
const intake_options = [ // Need to figure out the types of intakes for this year's game
]
const playstyle_options = [ // Need to figure out what to put here
	
]
const best_auto_options = [ // Need to figure out what to put here

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
					<h3 className='playstyle-text'>Playstyle</h3>
						<Select className='dropdown' id='playstyle-dropdown' options={playstyle_options}/>
					<h3 className='best-auto-test'>Best Auto</h3>
						<Select className='dropdown' id='best-auto-dropdown' options={best_auto_options}/>
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
		</div> 
	);

}