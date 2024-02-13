import './App.css';
//import { useState } from 'react';
import { submitHandler, HarmonyComponent, ParkedComponent, ClimbedComponent, DropsComponent,
TrapComponent, TeleSpeakerAmplifiedComponent, TeleSpeakerUnamplifiedComponent,TeleAmpComponent, LeftZoneComponent,
AutoSpeakerComponent, AutoAmpComponent, BlueButton, RedButton, TeamNumInput, MatchNumInput, ScoutNameInput } from './Stand.js'

let x = true;

function App() {
  if (x === true) {
    return (
      <div class='stand_container'>
        <h1 class='stand-text'>Stand Scouting</h1>
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
        <br></br>
        <br></br>
        <input onClick={submitHandler} type='submit'/>
        <br></br>
        <br></br>
    </div>
  );
  }
  
}

export default App;