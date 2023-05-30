'use client'

import { useEffect, useRef } from 'react'
import Webcam from 'react-webcam'
import { useDispatch } from 'react-redux'
import { changePageNumber } from '@/context/slice'
import '@tensorflow/tfjs-backend-webgl'
import { GestureEstimator } from 'fingerpose'
import { RockGesture, PaperGesture, ScissorsGesture } from '../assets/gestures'
import * as handpose from '@tensorflow-models/handpose'

function Fingerspose() {
  const webCam = useRef()
  const dispatch = useDispatch()
  const intervalRef = useRef(null)
  const knownGestures = [RockGesture, PaperGesture, ScissorsGesture]
  const gestureEstimator = new GestureEstimator(knownGestures)

  useEffect(() => {
    let data = null

    const getHand = async () => {
      if (webCam.current.video !== null && webCam.current.video !== undefined) {
        const hands = await data.estimateHands(webCam.current.video)
        if (hands.length !== 0) {
          const estimatedGestures = await gestureEstimator.estimate(
            hands[0].landmarks,
            8.5,
          )
          if (
            estimatedGestures.gestures[0] &&
            estimatedGestures.gestures[0].name === 'paper'
          ) {
            dispatch(changePageNumber())
          }
        }
      }
    }

    const initializeHandPose = async () => {
      data = await handpose.load()
      intervalRef.current = setInterval(getHand, 1000)
    }

    const cleanup = () => {
      clearInterval(intervalRef.current)
    }

    setTimeout(initializeHandPose, 3000)

    return cleanup
  })

  return (
    <Webcam
      ref={webCam}
      videoConstraints={{ frameRate: { max: 1 } }}
      width={500}
      height={500}
      style={{
        height: '50px',
        width: '50px',
        position: 'absolute',
        zIndex: -1,
      }}
    />
  )
}

export default Fingerspose
