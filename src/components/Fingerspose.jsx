import { useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import { GestureEstimator } from 'fingerpose'
import { RockGesture, PaperGesture, ScissorsGesture } from '../assets/gestures'
import { Route, useLocation, Switch } from 'wouter'

import { useDispatch } from 'react-redux'
import { showInformationOnComputer } from '../contexts/homeSlice'

import * as handpose from '@tensorflow-models/handpose'
import * as tf from '@tensorflow/tfjs-core'
import '@tensorflow/tfjs-backend-webgl'

function Fingerspose() {
  const webCam = useRef()
  const intervalRef = useRef(null)
  const [location, setLocation] = useLocation()
  const pages = ['/', '/about', '/turing', '/turing-machine']
  const [page, setPage] = useState(0)

  useEffect(() => {
    window.addEventListener('keypress', (event) => {
      if (event.code === 'Space') {
        setPage(page + 1)
      }
    })

    if (location !== pages[page]) {
      setLocation(pages[page])
    }

    setTimeout(() => {
      if (location !== pages[page]) {
        setLocation(pages[page])
      }
    }, 1000)
  }, [page, setLocation, pages])

  useEffect(() => {
    const knownGestures = [RockGesture, PaperGesture, ScissorsGesture]
    const gestureEstimator = new GestureEstimator(knownGestures)
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
            setPage(page + 1)
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
