import {
  GestureDescription,
  Finger,
  FingerCurl,
  FingerDirection,
} from 'fingerpose'

const RockGesture = new GestureDescription('rock') // ✊️
const PaperGesture = new GestureDescription('paper') // 🖐
const ScissorsGesture = new GestureDescription('scissors') // ✌️

// Rock
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
RockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
RockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)

// all other fingers: curled
for (const finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  RockGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
  RockGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0)
}

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
ScissorsGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.8)
ScissorsGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.8)
ScissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
ScissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)

// ring: curled
ScissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
ScissorsGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9)

// pinky: curled
ScissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
ScissorsGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9)

export { RockGesture, PaperGesture, ScissorsGesture }
