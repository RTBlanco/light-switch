import './App.css';
import {useRive, useStateMachineInput} from 'rive-react';

function App() {

  const { rive, RiveComponent} = useRive({
    src: "switch.riv",
    stateMachines: "State Machine 1",
    // animations: "day",
    autoplay: true,
  })

  const onClickInput = useStateMachineInput(rive, "State Machine 1", "Switch")

  return (
    <div>
      <RiveComponent onClick={() => onClickInput.fire()} className="switch"/>
      {/* <RiveComponent /> */}
    </div>
  );
}

// function App() {

//   const { rive, RiveComponent} = useRive({
//     src: "hamburger-time.riv",
//     stateMachines: "Basic State Machine",
//     // animations: "day",
//     autoplay: true,
//   })

//   const onClickInput = useStateMachineInput(rive, "Basic State Machine", "Switch")

//   return (
//     <div>
//       <RiveComponent onClick={() => onClickInput.fire()}/>
//       {/* <RiveComponent /> */}
//     </div>
//   );
// }

export default App;
