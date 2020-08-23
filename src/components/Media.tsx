import * as React from "react";
import { useContext } from "react"
import { LengthContex } from "../context/LengthContext";


const MediaButtons: React.FC = () => {
  const { dispatch, state } = useContext(LengthContex)
  const {sessionMinutes, sessionSeconds } = state

  const timer = () => {
    dispatch({
      type: 'START'
    })
  }



  return (
    <>
      <div id="timer-label">Session</div>
      <div id="time-left">{sessionMinutes}:{sessionSeconds}</div>
      <button id="start_stop" onClick={timer}>start</button>
      <button id="reset">reset</button>
    </>
  )

}
export default MediaButtons