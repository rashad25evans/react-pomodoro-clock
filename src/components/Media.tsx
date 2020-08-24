import * as React from "react";
import { useContext, useState } from "react"
import { LengthContex } from "../context/LengthContext";
import { StateInterface } from "../Interfaces/StateInterface";


const MediaButtons: React.FC = () => {
  const { dispatch, state } = useContext(LengthContex)
  const { sessionMinutes, sessionSeconds } = state
  const [time, useTime] = useState<StateInterface>({
    minutes: '25',
    seconds: '00'
  })

  let myVar
  let timesClicked = 0
  const setTimer = () => {
    timesClicked++
    if (timesClicked % 2 !== 0) {
      myVar = setInterval(() => {
        let seconds = time.seconds < 0 ? time.seconds = 60 - 1 : time.seconds--
        let minutes = time.seconds < 0 ? time.minutes-- : time.minutes
        let timeFormat = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
        document.getElementById('time-left').innerHTML = timeFormat
      }, 1000);
    } else {
      clearInterval(myVar)
    }
  }

  return (
    <>
      <div id="timer-label">Session</div>
      <div id="time-left">{sessionMinutes}:{sessionSeconds}</div>
      <button id="start_stop" onClick={setTimer}>start</button>
      <button id="reset">reset</button>
    </>
  )

}
export default MediaButtons