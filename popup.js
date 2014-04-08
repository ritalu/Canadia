// Store frame for motion functions
var previousFrame = null;
var paused = false;
var pauseOnGesture = true;

// Setup Leap loop with frame callback function
var controllerOptions = {enableGestures: true};

Leap.loop(controllerOptions, function(frame) {
  if (paused) {
    return; // Skip this update
  }

  var frameStringi = "Gestures: " + frame.gestures.length + "<br />";

  // Display Gesture object data
  var gestureOutput = document.getElementById("gestureData");
  var gestureString = "";

  if (frame.gestures.length > 0) {
    // if (pauseOnGesture) {
      
    // }
    for (var i = 0; i < frame.gestures.length; i++) {
      var gesture = frame.gestures[i];
      gestureString += "Gesture ID: " + gesture.id + ", "
                    + "type: " + gesture.type + ", "
                    + "state: " + gesture.state + ", "
                    + "hand IDs: " + gesture.handIds.join(", ") + ", "
                    + "pointable IDs: " + gesture.pointableIds.join(", ") + ", "
                    + "duration: " + gesture.duration + " &micro;s, ";
      if (gesture.type == "swipe"){
        slapAnimation();
      }
      gestureString += "<br />";
    }
  }
  else {
    gestureString += "No gestures";
  }

  // Store frame for motion functions
  previousFrame = frame;
})

var slapped = false;

function slapAnimation() {
  if (slapped == false) {

  console.log("slapped");
 
  togglePause();

  document.getElementById("slap").src="./images/slap.gif";

  var sound = new Audio('./sorry.mp3');
  sound.play();
  document.getElementById("sorry").style.visibility="visible";

  document.getElementById("slapbutton").innerText = "Unslap!";
  setTimeout(function() { standbyReversed();}, 2400);

  slapped = true;
  } else {
    console.log("reverse slapped");
 
    togglePause();

    document.getElementById("slap").src="./images/slap-reversed.gif";

    var sound = new Audio('./thanks.mp3');
    sound.play();
    document.getElementById("thankseh").style.visibility="visible";

    document.getElementById("slapbutton").innerText = "Slap!";
    setTimeout(function() { standby();}, 2550);

    slapped = false;

  }           
}

function standbyReversed() {
  document.getElementById("slap").src="./images/slap-reversed-still.png";
  document.getElementById("sorry").style.visibility="hidden";
}

function standby() {
  document.getElementById("slap").src="./images/slap-still.png";
  document.getElementById("thankseh").style.visibility="hidden";
}

document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById("slapbutton");
  button.addEventListener('click', function() {
    slapAnimation();
  });
});

function vectorToString(vector, digits) {
  if (typeof digits === "undefined") {
    digits = 1;
  }
  return "(" + vector[0].toFixed(digits) + ", "
             + vector[1].toFixed(digits) + ", "
             + vector[2].toFixed(digits) + ")";
}

function togglePause() {
  paused = !paused;

  // if (paused) {
  //   document.getElementById("pause").innerText = "Resume";
  // } else {
  //   document.getElementById("pause").innerText = "Pause";
  // }
}

// function pauseForGestures() {
//   if (document.getElementById("pauseOnGesture").checked) {
//     pauseOnGesture = true;
//   } else {
//     pauseOnGesture = false;
//   }
// }
