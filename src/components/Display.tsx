import * as React from "react";
import { useContext } from "react"
import { LengthContex } from "../context/LengthContext";

const Display: React.FC = () => {
  const { dispatch, state } = useContext(LengthContex)
  const { breakLength, sessionLength } = state
  


  return (
    <>
     
    </>
  )

}
export default Display