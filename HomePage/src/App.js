import {useState} from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {

  const[text,setText] = useState('');
  const[name,setName] = useState('astha');

  // variation 1 - Every Render
  // useEffect( () => {
  //    console.log('UI rendering');
  //   }
  // );

  // variation 2 - First Render
  // useEffect( () => {
  //     console.log('UI rendering');
  //   },[]
  // );

  //variation 3 - First Render +  whenever dependency changes
  // useEffect( () => {
  //     console.log('text change hua');
  //   },[name]
  // );

  //variation 3 - First Render +  whenever dependency changes
  //   useEffect( () => {
  //     console.log('text change hua');
  //   },[name]
  // );

  //variation 4 - to handle unamounting of a component
    useEffect( () => {
      // add event listener
      console.log('Listener Added');

      return() => {
        console.log('Listener Removed');
      }
    },[text]);

  function changeHandler(event){
    console.log(text);
    setText(event.target.value)
  }

  return (
    <div>
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
