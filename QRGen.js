// Basically, uploading's not gonna work. QR codes are probably our best bet.
// Am I cooking here? idk
src= "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"
function makeQR() {
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
    var qrcode = new QRCode("test", {
        text: input,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    }); 
    return qrcode;
}