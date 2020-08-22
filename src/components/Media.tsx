import * as React from "react";
import { useContext } from "react"
import { LengthContex } from "../context/LengthContext";


const MediaButtons: React.FC = () => {
  const { dispatch, state } = useContext(LengthContex)
  const { breakLength, sessionLength } = state
  let interval: any;

  const timer = () => {
    let minutes: number = sessionLength - 1
    let seconds: any = 59
    interval = setInterval(() => {
      if (seconds < 10) {
        seconds = '0' + seconds
        if (seconds === '00') {
          minutes--;
          seconds = 59
        }
      }
      const m: string = `${minutes}:${seconds}`
      seconds--
      document.getElementById("time-left").innerHTML = m;
    }, 1000)
  }



  return (
    <>
      <div id="timer-label">Session</div>
      <div id="time-left">{sessionLength}:00</div>
      <button id="start_stop" onClick={timer}>start</button>
      <button id="reset" onClick={() => clearInterval(interval)}>reset</button>
    </>
  )

}
export default MediaButtons