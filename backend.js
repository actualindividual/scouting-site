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

var landElements = document.getElementsByClassName("indexButtonLand");
var homeElements = document.getElementsByClassName("indexButtonHome");

//document.getElementById("EmailInput").style.visibility="hidden";
window.onload = function(){
    

    if(checkLocalStorage()){
        for(var index = 0; index++; index<landElements.length){
            landElements[index].style.visible = false;
        }
    } else {
        for(var index = 0; index++; index<landElements.length){
            homeElements[index].style.visible = false;
        }
    }
}


//Landing stuff
var isLanding = false;

//Auto Button event logic
AutoSpeaker.onclick = function(){
    AutoPlay.push("Speaker");
    updateAuto();
    uploadStand();
}

AutoAmp.onclick = function(){
    AutoPlay.push("Amp");
    updateAuto();
}

AutoClear.onclick = function(){
    console.log("autoclear");
    AutoPlay=[];
    updateAuto();
}

AutoRemove.onclick = function(){
    AutoPlay.pop();
    updateAuto();
}

LeftZone.onchange = function(){
    console.log(LeftZone.value);
    updateAuto();
}

//Uodates the auto after data has been changed
function updateAuto(){
    AutoMoves.value="NumMoves: "+AutoPlay.length;
    updateAutoText();
    AutoScore = updateAutoScore();
    AutoScoreText.value="Score: "+AutoScore;
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
        console.log(score);
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
    console.log("autoclear");
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
    console.log(TelePlay);
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
    console.log(TeleSpeakerNum+" "+TeleAmpNum+" "+TeleAmpedSpeakerNum);
    return score;
}

function checkNoteThrow(){
    
}

// The submit function copied from the past one

function uploadStand() {
    //e.preventDefault();
      fetch('https://thingproxy.freeboard.io/fetch/http://98.59.100.219:3082/matchinput', {
         method: 'POST',
         mode: 'no-cors',
         headers: {'Content-Type':"application/json;charset=UTF-8"}, 
         body: JSON.stringify({
            "username": localStorage.getItem('username'),
            "email": localStorage.getItem('email'),
            "password": localStorage.getItem('password'), // should be hashed
            "scoutname": "ojodfh",
            "team": 9, //document.getElementById('TeamNumber').value,
            "matchNumber": 1, //document.getElementById('MatchNumber').value,
            "alliance": 'blue', //document.getElementById("AllianceSelector").value,
            "autoAmpPoints": 10, //AutoAmpNum,
            "autoSpeakerPoints": AutoSpeakerNum,
            "autoLeftZone": document.getElementById("leftZoneSelector").value == false ? false : true,
            "teleAmpPoints": TeleAmpNum, //int
            "teleSpeakerPoints": TeleSpeakerNum, //int
            "teleSpeakerAmplifiedNotes": TeleAmpedSpeakerNum, //int
            "drops": document.getElementById("dropIn"), // int
            "climbed": true, // boolean 
            "parked": true, // boolean
            "trap": true, // boolean?
            "offeredcoop": true, // boolean
            "didcoop": true, // boolean
            "ampmike": true, // boolean
            "sourcemike": true, // boolean
            "centermike": true, // boolean
            "harmony": true // boolean
         })}).then(result => console.log('success====:', result))
         .catch(error => console.log('error============:', error));
}

document.getElementById("submitButton").onclick = function() {uploadStand()};

// Save stuff to localStorage

function saveToLocalStorage(email, username, password, name) {
    localStorage.setItem('email', email);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('name', name);
}

// Check localStorage for login data, return true/false
function checkLocalStorage() {
    return localStorage.getItem('email') != null && 
        localStorage.getItem('username') != null &&
        localStorage.getItem('password') != null;
}