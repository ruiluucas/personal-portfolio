import {
  GestureDescription,
  Finger,
  FingerCurl,
  FingerDirection,
} from 'fingerpose'

const LGesture = new GestureDescription('l') // ✊️
const PaperGesture = new GestureDescription('paper') // 🖐
const ScissorsGesture = new GestureDescription('scissors') // ✌️

// L
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
LGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.9)
LGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
LGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.9)
LGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.9)
LGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9)

// ring: curled
LGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.9)

// pinky: curled
LGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.9)

// Paper
// -----------------------------------------------------------------------------

// no finger should be curled
for (const finger of Finger.all) {
  PaperGesture.addDirection(finger, FingerDirection.VerticalUp, 0.9)
  PaperGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
}

// Scissors
// ------------------------------------------------------------------------------

// index and middle finger: stretched out
ScissorsGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.9)
ScissorsGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.9)
ScissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
ScissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)

// ring: curled
ScissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.9)

// pinky: curled
ScissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.9)

export { LGesture, PaperGesture, ScissorsGesture }
