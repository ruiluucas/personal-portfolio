import React from "react";
import Webcam from 'react-webcam';
import * as handpose from '@tensorflow-models/handpose';
import { GestureEstimator } from 'fingerpose';
import { PaperGesture } from '../assets/gestures';
import '@tensorflow/tfjs-backend-webgl';
import pages from "../assets/pages";

class ChangePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeHandDetection: false,
        location: props.location,
        detectionDelay: false
      };
      this.setLocation = props.setLocation
      this.webCam = React.createRef();
      this.detectionInterval = React.createRef();
    }

    componentDidMount() {
      document.addEventListener('keyup', this.handleKeyboard)
      this.state.activeHandDetection && this.handleDetection()
    }

    componentDidUpdate() {
      if (this.state.detectionDelay) {
        setTimeout(() => {
          this.setState({ detectionDelay: false })
        }, 2000);
        return
      }
    }

    componentWillUnmount() {
      document.removeEventListener('keyup', this.handleKeyboard);
      clearInterval(this.detectionInterval.current);
    }

    handleKeyboard = (event) => {
      const key = event.key;
      if (pages[key - 1]) {
        this.setState({ location: pages[key - 1] });
        this.setLocation(pages[key - 1])
      }
    }

    handleDetection = async () => {
      const gestureEstimator = new GestureEstimator([PaperGesture]);

      const data = await handpose.load({
          detectionConfidence: 0.9,
      });

      this.detectionInterval.current = setInterval(async () => {

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
                  this.setLocation(pages[currentIndex + 1])
                  this.setState({ detectionDelay: true })
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
              !this.state.activeHandDetection && 
              <article className="bg-black absolute z-40 left-0 bottom-0 flex h-80 w-50 flex-col items-center justify-center  text-white">
                <h2 className="text-center text-xl font-extrabold">
                    Could like enable HandPose control?
                </h2>
                <button onClick={ () => { 
                  this.setState({ activeHandDetection: true } )
                  this.handleDetection()
                  } }>Yes</button>
                <button>Something Keyboard</button>
              </article>
            }
            { 
              this.state.activeHandDetection && 
                  <Webcam
                  ref={this.webCam}
                  videoConstraints={{ frameRate: { max: 5 } }}
                  width={300}
                  height={300}
                  style={{
                      height: '100px',
                      width: '100px',
                      position: 'absolute',
                      zIndex: -1,
                  }} 
              />
            } 
          </>
        );
    }
}

export default ChangePage;