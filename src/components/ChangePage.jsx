import React from "react";
import Webcam from 'react-webcam';
import * as handpose from '@tensorflow-models/handpose';
import { GestureEstimator } from 'fingerpose';
import { PaperGesture } from '../assets/gestures';
import '@tensorflow/tfjs-backend-webgl';
import pages from "../assets/pages";
import delayChange from "../assets/delayChange";

class ChangePage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        activeHandDetection: props.activeHandDetection,
        location: props.location,
        detectionDelay: false
      }
      this.onChangeLocation = props.onChangeLocation
      this.setLocation = props.setLocation
      this.delayChange = delayChange
      this.webCam = React.createRef()
      this.detectionInterval = React.createRef()
    }

    componentDidMount() {
      document.addEventListener('keyup', this.handleKeyboard)
    }

    componentDidUpdate() {
      this.state.activeHandDetection && this.handleDetection()
      if(this.state.activeHandDetection != this.props.activeHandDetection) {
        this.setState({ activeHandDetection: this.props.activeHandDetection })
      }
      if (this.state.detectionDelay) {
        setTimeout(() => {
          this.setState({ detectionDelay: false })
        }, 2000)
        return
      }
    }

    componentWillUnmount() {
      document.removeEventListener('keyup', this.handleKeyboard)
      clearInterval(this.detectionInterval.current)
    }

    handleKeyboard = (event) => {
      const key = event.key;
      if (pages[key - 1]) {
        this.setState({ location: pages[key - 1] })
        if (Object.keys(this.delayChange).includes(this.state.location)) {
          this.onChangeLocation(true)
          setTimeout(() => {
            this.setLocation(pages[key - 1])
            this.onChangeLocation(false)
          }, this.delayChange[this.state.location])
        } else {
          this.setLocation(pages[key - 1])
        }
      }
    }

    handleDetection = async () => {
      const gestureEstimator = new GestureEstimator([PaperGesture]);

      const data = await handpose.load({
          detectionConfidence: 0.9,
      });

      this.detectionInterval.current = setInterval(async () => {
        if(this.state.activeHandDetection) {
          const hands = await data.estimateHands(this.webCam.current.video, true);
          if (hands.length !== 0) {
            const estimatedGestures = await gestureEstimator.estimate(
              hands[0].landmarks,
              8.5,
            );

            if (estimatedGestures.gestures[0]) {
              if (estimatedGestures.gestures[0].name === 'paper') {
                const { location } = this.state
                const currentIndex = pages.indexOf(location)
                if (currentIndex !== -1 && pages[currentIndex + 1]) {
                  if (this.state.detectionDelay) {
                    return
                  }
                  this.setState({ location: pages[currentIndex + 1] })
                  if (Object.keys(this.delayChange).includes(this.state.location)) {
                    this.onChangeLocation(true)
                    setTimeout(() => {
                      this.setLocation(pages[currentIndex + 1])
                      this.onChangeLocation(false)
                    }, this.delayChange[this.state.location])
                  } else {
                    this.setLocation(pages[currentIndex + 1])
                  }
                  this.setState({ detectionDelay: true })
                }
              }
            }
          }
        }
      }, 1000);
    }

    render() {
        return (
          <>
            { 
              this.state.activeHandDetection &&
              <>
                  <div style={{
                    height: '100px',
                    width: '100px',
                    position: 'absolute',
                    zIndex: -1,
                    background: 'black'
                }} >

                  </div>
                  <Webcam
                  ref={this.webCam}
                  videoConstraints={{ frameRate: { max: 5 } }}
                  width={300}
                  height={300}
                  style={{
                      height: '100px',
                      width: '100px',
                      position: 'absolute',
                      zIndex: -2,
                  }} 
              />
              </>
            } 
          </>
        );
    }
}

export default ChangePage;