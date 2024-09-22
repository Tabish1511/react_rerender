import React, { useState } from 'react';
import { InputComponent } from './components/Input';
import { NavBar } from './components/navBar';
import { InfoBox } from './components/infoBox';

// function App() {
//     const [todos, setTodos] = useState([]);

//     const addTodo = (newTodo) => {
//         setTodos([...todos, newTodo]);
//     };

//     return (
//         <div>
//             <InputComponent onAddTodo={addTodo} />
//             <ul>
//                 {todos.map((todo, index) => (
//                     <li key={index}>{todo}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }






// export function ChildComponent() {
//   console.log('ChildComponent LOG');

//   return (
//     <div>
//       Hello World child component
//     </div>
//   );
// }



// export function App() {
//   const [count, setCount] = useState(0);
  
//   console.log('App LOG');
  
//   return (
//     <div>
      
//       <button onClick={() => setCount((count)=> count+1)}>
//         Click me
//       </button>
      
//       <div>
//         {count}
//       </div>

//       <ChildComponent />
    
//     </div>
//   );
// }







export function App() {
  const [key, setKey] = useState(0);

  console.log('Parent LOG');
  
  function handleClick(){
    setKey(key + 1);
  }

  return (
    <div>
      <NavBar onHandleClick={handleClick} />
      <InfoBox key={key} />
    </div>
  )
}




































export default App;
