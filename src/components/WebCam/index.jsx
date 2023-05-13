import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

import * as handpose from '@tensorflow-models/handpose';
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';

import { GestureEstimator } from 'fingerpose'
import { RockGesture, PaperGesture, ScissorsGesture } from './gestures';
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../contexts/styleSlice";

function FingersposeComponent() {
  const webCam = useRef()
  const estimationConfig = {flipHorizontal: false}

  const count = useSelector((state) => state.style.value)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(async () => {
      let knownGestures = [RockGesture, PaperGesture, ScissorsGesture]
      let gestureEstimator = new GestureEstimator(knownGestures)
      let data = await handpose.load()

      const getHand = async () => {
        const hands = await data.estimateHands(webCam.current.video, estimationConfig)
        if(hands.length != 0) {
          const estimatedGestures = await gestureEstimator.estimate(hands[0].landmarks, 8.5)
          if (estimatedGestures.gestures[0] && estimatedGestures.gestures[0].name === "paper") {
            dispatch(increment())
            console.log(count)
          }  else {
            //setIsPaper(false)
          }
        } else {
          //setIsPaper(false)
        }
      }
  
      setInterval(() => {
        getHand()
      }, 1500)
    }, 1000)
  }, [])

  return (
    <Webcam ref={webCam} videoConstraints={{ frameRate: { max: 2 } }} width={500} height={500}  style={{ height: "100px", width: "100px", position: "absolute", zIndex: -1 }} />
  )
}

export default FingersposeComponent

