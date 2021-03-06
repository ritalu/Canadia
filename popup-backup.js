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

  // // Display Frame object data
  // var frameOutput = document.getElementById("frameData");

   var frameString = 
   //"Frame ID: " + frame.id  + "<br />"
  //                 + "Timestamp: " + frame.timestamp + " &micro;s<br />"
  //                 + "Hands: " + frame.hands.length + "<br />"
  //                 + "Fingers: " + frame.fingers.length + "<br />"
  //                 + "Tools: " + frame.tools.length + "<br />"
                  "Gestures: " + frame.gestures.length + "<br />";

  // // Frame motion factors
  // if (previousFrame && previousFrame.valid) {
  //   var translation = frame.translation(previousFrame);
  //   frameString += "Translation: " + vectorToString(translation) + " mm <br />";

  //   var rotationAxis = frame.rotationAxis(previousFrame);
  //   var rotationAngle = frame.rotationAngle(previousFrame);
  //   frameString += "Rotation axis: " + vectorToString(rotationAxis, 2) + "<br />";
  //   frameString += "Rotation angle: " + rotationAngle.toFixed(2) + " radians<br />";

  //   var scaleFactor = frame.scaleFactor(previousFrame);
  //   frameString += "Scale factor: " + scaleFactor.toFixed(2) + "<br />";
  // }
  // frameOutput.innerHTML = "<div style='width:300px; float:left; padding:5px'>" + frameString + "</div>";

  // // Display Hand object data
  // var handOutput = document.getElementById("handData");
  // var handString = "";
  // if (frame.hands.length > 0) {
  //   for (var i = 0; i < frame.hands.length; i++) {
  //     var hand = frame.hands[i];

  //     handString += "<div style='width:300px; float:left; padding:5px'>";
  //     handString += "Hand ID: " + hand.id + "<br />";
  //     handString += "Direction: " + vectorToString(hand.direction, 2) + "<br />";
  //     handString += "Palm normal: " + vectorToString(hand.palmNormal, 2) + "<br />";
  //     handString += "Palm position: " + vectorToString(hand.palmPosition) + " mm<br />";
  //     handString += "Palm velocity: " + vectorToString(hand.palmVelocity) + " mm/s<br />";
  //     handString += "Sphere center: " + vectorToString(hand.sphereCenter) + " mm<br />";
  //     handString += "Sphere radius: " + hand.sphereRadius.toFixed(1) + " mm<br />";

  //     // Hand motion factors
  //     if (previousFrame && previousFrame.valid) {
  //       var translation = hand.translation(previousFrame);
  //       handString += "Translation: " + vectorToString(translation) + " mm<br />";

  //       var rotationAxis = hand.rotationAxis(previousFrame, 2);
  //       var rotationAngle = hand.rotationAngle(previousFrame);
  //       handString += "Rotation axis: " + vectorToString(rotationAxis) + "<br />";
  //       handString += "Rotation angle: " + rotationAngle.toFixed(2) + " radians<br />";

  //       var scaleFactor = hand.scaleFactor(previousFrame);
  //       handString += "Scale factor: " + scaleFactor.toFixed(2) + "<br />";
  //     }

  //     // IDs of pointables (fingers and tools) associated with this hand
  //     if (hand.pointables.length > 0) {
  //       var fingerIds = [];
  //       var toolIds = [];
  //       for (var j = 0; j < hand.pointables.length; j++) {
  //         var pointable = hand.pointables[j];
  //         if (pointable.tool) {
  //           toolIds.push(pointable.id);
  //         }
  //         else {
  //           fingerIds.push(pointable.id);
  //         }
  //       }
  //       if (fingerIds.length > 0) {
  //         handString += "Fingers IDs: " + fingerIds.join(", ") + "<br />";
  //       }
  //       if (toolIds.length > 0) {
  //         handString += "Tools IDs: " + toolIds.join(", ") + "<br />";
  //       }
  //     }

  //     handString += "</div>";
  //   }
  // }
  // else {
  //   handString += "No hands";
  // }
  // handOutput.innerHTML = handString;

  // Display Pointable (finger and tool) object data
  // var pointableOutput = document.getElementById("pointableData");
  // var pointableString = "";
  // if (frame.pointables.length > 0) {
  //   for (var i = 0; i < frame.pointables.length; i++) {
  //     var pointable = frame.pointables[i];

  //     pointableString += "<div style='width:250px; float:left; padding:5px'>";
  //     pointableString += "Pointable ID: " + pointable.id + "<br />";
  //     pointableString += "Belongs to hand with ID: " + pointable.handId + "<br />";

  //     if (pointable.tool) {
  //       pointableString += "Classified as a tool <br />";
  //       pointableString += "Length: " + pointable.length.toFixed(1) + " mm<br />";
  //       pointableString += "Width: "  + pointable.width.toFixed(1) + " mm<br />";
  //     }
  //     else {
  //       pointableString += "Classified as a finger<br />";
  //       pointableString += "Length: " + pointable.length.toFixed(1) + " mm<br />";
  //     }

  //     pointableString += "Direction: " + vectorToString(pointable.direction, 2) + "<br />";
  //     pointableString += "Tip position: " + vectorToString(pointable.tipPosition) + " mm<br />";
  //     pointableString += "Tip velocity: " + vectorToString(pointable.tipVelocity) + " mm/s<br />";

  //     pointableString += "</div>";
  //   }
  // }
  // else {
  //   pointableString += "<div>No pointables</div>";
  // }
  // pointableOutput.innerHTML = pointableString;

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
      // switch (gesture.type) {
      //   case "circle":
      //     gestureString += "center: " + vectorToString(gesture.center) + " mm, "
      //                   + "normal: " + vectorToString(gesture.normal, 2) + ", "
      //                   + "radius: " + gesture.radius.toFixed(1) + " mm, "
      //                   + "progress: " + gesture.progress.toFixed(2) + " rotations";
      //     break;
      //   case "swipe":
      //     gestureString += "start position: " + vectorToString(gesture.startPosition) + " mm, "
      //                   + "current position: " + vectorToString(gesture.position) + " mm, "
      //                   + "direction: " + vectorToString(gesture.direction, 2) + ", "
      //                   + "speed: " + gesture.speed.toFixed(1) + " mm/s";
      //     break;
      //   case "screenTap":
      //   case "keyTap":
      //     gestureString += "position: " + vectorToString(gesture.position) + " mm, "
      //                   + "direction: " + vectorToString(gesture.direction, 2);
      //     break;
      //   default:
      //     gestureString += "unkown gesture type";
      // }
      gestureString += "<br />";
    }
  }
  else {
    gestureString += "No gestures";
  }
  // gestureOutput.innerHTML = gestureString;

  // Store frame for motion functions
  previousFrame = frame;
})

var slapped = false;

function slapAnimation() {
            if (slapped == false){

            console.log("slapped");
 
            togglePause();

            document.getElementById("slap").src="./images/slap.gif";


            var sound = new Audio('./Voice0004.mp3');
            sound.play();
	         document.getElementById("sorry").style.visibility="visible";

            document.getElementById("slapbutton").innerText = "Unslap!";
            setTimeout(function() { temp();}, 2400);

            slapped = true;
          }

          else {
              console.log("reverse slapped");
 
            togglePause();

            document.getElementById("slap").src="./images/slap-reversed.gif";


            var sound = new Audio('./Voice0004.mp3');
            sound.play();
           document.getElementById("sorry").style.visibility="visible";

            setTimeout(function() { temp2();}, 2500);

            slapped = false;

          }

            
}

function temp() {
    document.getElementById("slap").src="./images/slap-reversed-still.png";
    document.getElementById("sorry").style.visibility="hidden";
}

function temp2() {
    document.getElementById("slap").src="./images/slap-still.png";
    document.getElementById("sorry").style.visibility="hidden";
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
