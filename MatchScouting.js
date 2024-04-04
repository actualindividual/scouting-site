var totalScore = 0;

//Auto Section Logic
var AutoPlay = [];
var AutoScore = 0;
var AutoAmpNum = 0;
var AutoSpeakerNum = 0;

//Auto Buttons
var AutoSpeaker = document.getElementById("AutoSpeaker");
var AutoAmp =  document.getElementById("AutoAmp");
var AutoClear = document.getElementById("AutoClear");
var AutoRemove = document.getElementById("AutoRemove");
var LeftZone =  document.getElementById("leftZoneSelector");

//Auto TextArea and score display
var AutoText = document.getElementById("AutoPlay");
var AutoMoves = document.getElementById("AutoNumMoveDis");
var AutoScoreText = document.getElementById("AutoScoreDis");


AutoSpeaker.onclick = function(){
    AutoPlay.push("Speaker");
    updateAuto();
}

document.getElementById("sumbitButton").onclick = function(){
    uploadStand();
    //location.reload()
}

AutoAmp.onclick = function(){
    AutoPlay.push("Amp");
    updateAuto();
}

AutoClear.onclick = function(){
    AutoPlay=[];
    updateAuto();
}

AutoRemove.onclick = function(){
    AutoPlay.pop();
    updateAuto();
}

LeftZone.onchange = function(){
    updateAuto();
}

//Uodates the auto after data has been changed
function updateAuto(){
    AutoMoves.value="NumMoves: "+AutoPlay.length;
    updateAutoText();
    AutoScore = updateAutoScore();
    AutoScoreText.value = "Score: "+AutoScore;
    totalScoreUpdate();
}

//Updates the textarea to show all moves
function updateAutoText(){
    text = "";
    if(AutoPlay.length==0){
        AutoText.value=text;
        return;
    }
    
    for(i = 0; i<AutoPlay.length-1; i++){
       text += AutoPlay[i]+", ";
    }
    text += AutoPlay[AutoPlay.length-1]
    document.getElementById("AutoPlay").value=text;

}

//Updates the auto scoore
function updateAutoScore(){
    score = 0;
    AutoAmpNum=0;
    AutoSpeakerNum=0;
    if(LeftZone.value=="true"){
        score+=2;
    }
    for(i = 0; i<AutoPlay.length; i++){
        if(AutoPlay[i]=="Speaker"){
            score+=5;
            AutoSpeakerNum++;
        } else {
            score+=2;
            AutoAmpNum++;
        }
    }
    return score;
}

//Teleop Section Logic
var TelePlay = [];
var TeleScore = 0;
var TeleAmpNum = 0;
var TeleSpeakerNum = 0;
var TeleAmpedSpeakerNum = 0;

//Auto Buttons
var TeleSpeaker = document.getElementById("teleSpeaker");
var TeleAmp =  document.getElementById("teleAmp");
var TeleAmpSpeaker =  document.getElementById("teleAmpSpeaker");
var TeleClear = document.getElementById("teleClear");
var TeleRemove = document.getElementById("teleRemove");

//Auto TextArea and score display
var TeleText = document.getElementById("teleText");
var TeleMoves = document.getElementById("teleMoves");
var TeleScoreText = document.getElementById("teleScore");

//Tele Button event logic
TeleSpeaker.onclick = function(){
    TelePlay.push("Speaker");
    updateTele();
}

TeleAmp.onclick = function(){
    TelePlay.push("Amp");
    updateTele();
}

TeleAmpSpeaker.onclick = function(){
    TelePlay.push("Amped Speaker");
    updateTele();
}


TeleClear.onclick = function(){
    TelePlay=[];
    updateTele();
}

TeleRemove.onclick = function(){
    TelePlay.pop();
    updateTele();
}

//Uodates the Tele after data has been changed
function updateTele(){
    TeleMoves.value="NumMoves: "+TelePlay.length;
    updateTeleText();
    TeleScore = updateTeleScore();
    TeleScoreText.value="Score: "+TeleScore;
    totalScoreUpdate();
}

//Updates the textarea to show all moves
function updateTeleText(){
    text = "";
    if(TelePlay.length==0){
        TeleText.value=text;
        return;
    }
    
    for(i = 0; i<TelePlay.length-1; i++){
       text += TelePlay[i]+", ";
    }
    text += TelePlay[TelePlay.length-1]
    TeleText.value=text;

}

//Updates the auto scoore
function updateTeleScore(){
    score = 0;
    for(i = 0; i<TelePlay.length; i++){
        if(TelePlay[i]=="Speaker"){
            score+=2;
            TeleSpeakerNum++;
        } else if(TelePlay[i]=="Amped Speaker"){
            score+=5;
            TeleAmpedSpeakerNum++;
        } else {
            TeleAmpNum++;
        }
    }
    return score;
}

function totalScoreUpdate(){
    totalScore=AutoScore+TeleScore+endgameScore;
    document.getElementById("scoreShow").value="Total Points Scored: "+totalScore;
}

function uploadStand() {
    let data = {
        "scoutname":localStorage.getItem("Name"),
        "teamnumber":document.getElementById("TeamNumber").value.toString(),
        "matchnumber":document.getElementById("MatchNumber").value.toString(),
        "alliance":document.getElementById("AllianceSelector").value,
        "autoamppoints":AutoAmpNum,
        "autospeakerpoints":AutoSpeakerNum,
        "autoleftzone":document.getElementById("leftZoneSelector").value == "false" ? false : true,
        "teleamppoints":TeleAmpNum,
        "telespeakerpoints" :TeleSpeakerNum,
        "telespeakeramplifiedpoints":TeleAmpedSpeakerNum,
        "drops":document.getElementById("dropIn").value != ""?document.getElementById("dropIn").value:0,
        "climbed": document.getElementById("climbCheckBox").checked,
        "parked": document.getElementById("ParkCheckbox").checked,
        "harmony": document.getElementById("harmonyCheckBox").checked,
        "trap": document.getElementById("trapNumID").value,
        "offeredcoop": document.getElementById("offerCoopID").value == "false" ? false:true,
        "didcoop": document.getElementById("didCoopID").value == "false" ? false:true,
        "ampmike": document.getElementById("ampMikeSelector").value == "miss" ? false:true,
        "sourcemike": document.getElementById("sourceMikeSelector").value == "miss" ? false:true,
        "centermike": document.getElementById("centerMikeSelector").value == "miss" ? false:true,
        "numtraps": document.getElementById("trapNumID").value,
        "extranotes": document.getElementById("Extra Notes").value
    }
    console.log(data);
    sendData("https://cors-proxy.htmldriven.com/?url=http://98.59.100.219/matchinput", JSON.stringify(data));
}

var endgameScore = 0;
var ParkCheckbox = document.getElementById("ParkCheckbox");
var ClimbCheckBox = document.getElementById("climbCheckBox");
var HarmonyCheckBox = document.getElementById("harmonyCheckBox");
var TrapSelector = document.getElementById("TrapSelector");
var trapNumber = document.getElementById("trapNumID");
var selectorOne = document.getElementById("ampMikeSelector");
var selectorTwo = document.getElementById("sourceMikeSelector");
var selectorThree = document.getElementById("centerMikeSelector");

selectorOne.onchange = function(){
    updateEnd();
}

selectorTwo.onchange = function(){
    updateEnd();
}

selectorThree.onchange = function(){
    updateEnd();
}

ParkCheckbox.onchange = function(){
    updateEnd();
}

ClimbCheckBox.onchange = function(){
    updateEnd();
}

HarmonyCheckBox.onchange = function(){
    updateEnd();
}

TrapSelector.onchange = function(){
    updateEnd();
}

trapNumber.onchange = function(){
    updateEnd();
}

function updateEnd(){
    endgameScore=(trapNumber.value==""?0:trapNumber.value)*5;
    stageCalc();
    console.log(endgameScore);
    totalScoreUpdate();
}

function stageCalc(){
    console.log(isLit());
    if(HarmonyCheckBox.checked){
        endgameScore+=2;
    }

    if(ClimbCheckBox.checked){
        if(isLit()){
            endgameScore+=4;
            return;
        }
        endgameScore+=3;
    }

    if(ParkCheckbox.checked){
        endgameScore+=1;
    }
}

function isLit(){
    return document.getElementById("ampMikeSelector").value == "Score"
    || document.getElementById("sourceMikeSelector").value == "Score"
    || document.getElementById("centerMikeSelector").value == "Score";
}

async function sendData(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST', // Use POST for sending data
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: data
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      console.log('Data sent successfully!');
    } catch (error) {
      console.error('Error sending data:', error);
    }
}
  
 
