import { INCREMENT_SESSION, DECREMENT_SESSION, INCREMENT_BREAK, DECREMENT_BREAK, START } from "./types"


// const startTimer = () => {
//   let interval
//   let seconds = state.sessionSeconds
//   interval = setInterval(() => {
//     if (seconds < 10) {
//       seconds = '0' + seconds
//       if (seconds === '00') {
//         minutes--;
//         seconds = 59
//       }
//     }
//     if (minutes < 10) {
//       minutes = '0' + minutes
//       // if (minutes === '00') {
//       //   minutes--;
//       //   minutes = 59
//       // }
//     }
//     const m = `${minutes}:${seconds}`
//     seconds--
//     document.getElementById("time-left").innerHTML = m;
//   }, 1000)
//   console.log("Start")
// }



export default (state, action) => {
  let interval
  switch (action.type) {
    case INCREMENT_SESSION:
      return {
        breakLength: state.breakLength,
        sessionMinutes: state.sessionMinutes === 60 ? state.sessionMinutes : state.sessionMinutes + 1,
        sessionSeconds: state.sessionSeconds
      };
    case DECREMENT_SESSION:
      return {
        breakLength: state.breakLength,
        sessionMinutes: state.sessionMinutes === 1 ? state.sessionMinutes : state.sessionMinutes - 1,
        sessionSeconds: state.sessionSeconds
      };
    case INCREMENT_BREAK:
      return {
        breakLength: state.breakLength === 60 ? state.breakLength : state.breakLength + 1,
        sessionMinutes: state.sessionMinutes,
        sessionSeconds: state.sessionSeconds
      };
    case DECREMENT_BREAK:
      return {
        breakLength: state.breakLength === 1 ? state.breakLength : state.breakLength - 1,
        sessionMinutes: state.sessionMinutes,
        sessionSeconds: state.sessionSeconds
      };

    // case START:
    //     return {
    //       breakLength: state.breakLength,
    //       sessionMinutes: state.sessionMinutes = 10,
    //       sessionSeconds: state.sessionSeconds = 15,
    //       timer: setInterval(() => {
    //         // let seconds, minutes
    //         // seconds = state.sessionSeconds--;
    //         // minutes = state.sessionMinutes
    //         // if (seconds < 10 || minutes < 10) {
    //         //   seconds = '0' + seconds
    //         //   minutes = '0' + minutes
    //         //   if (seconds === '00') {
    //         //     state.sessionMinutes--
    //         //     state.sessionSeconds = 10
    //         //   }
    //         if (state.sessionMinutes < 10) {
    //           state.sessionMinutes = '0' + state.sessionMinutes
    //         }

    //         // if (state.sessionMinutes < 10) {

    //         // if (minutes === '00') {
    //         //   minutes--;
    //         //   minutes = 59
    //         // }
    //         // }
    //         const time = `${state.sessionMinutes}:${seconds}`
    //         document.getElementById("time-left").innerHTML = time;
    //     }, 1000)
    // }
    // return {

    // }
    default:
      return state;
  }
}



