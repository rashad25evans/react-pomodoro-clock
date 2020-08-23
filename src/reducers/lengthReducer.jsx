import { INCREMENT, DECREMENT, START } from "./types"


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
    case INCREMENT:
      return {
        breakLength: state.breakLength,
        sessionMinutes: state.sessionMinutes + 1,
        sessionSeconds: state.sessionSeconds
      };
    case DECREMENT:
      return {
        breakLength: state.breakLength,
        sessionMinutes: state.sessionMinutes - 1,
        sessionSeconds: state.sessionSeconds
      };
    case START:
      return {
        breakLength: state.breakLength,
        sessionSeconds: state.sessionSeconds = 15,
        sessionMinutes: state.sessionMinutes,
        timer: setInterval(() => {
          let seconds
          seconds = state.sessionSeconds--;
          if (seconds < 10) {
            seconds = '0' + seconds
            if (seconds === '00') {
              state.sessionMinutes--
              state.sessionSeconds = 10
            }
          }

          const time = `${state.sessionMinutes}:${seconds}`
          document.getElementById("time-left").innerHTML = time;
        }, 1000)

        //   if (seconds < 10) {
        //     seconds = '0' + seconds
        //     if (seconds === '00') {
        //       // minutes--;
        //       seconds = 59
        //     }
        // }
        // const m = `${0}:${seconds}`
        // seconds--;
      }
    default:
      return state;
  }
}



