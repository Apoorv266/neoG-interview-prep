// Take an input from the user in text format. Have 3 buttons with the names of "Log" ,"Warn" and "Error". If user clicks on "Log" button then the text entered by user will be shown in black color. Similarly if the user clicks on "Warn " and "Error " buttons then the text entered by user will be shown on the screen in the yellow and red colors respectively.


import './App.css';
import { useState } from 'react';

function App() {
 const [text, settext] = useState('')
 const [style, setstyle] = useState("black")
 const [val, setval] = useState("")

 function changFunc(e) {
  settext(e.target.value)
 }

 function logFunc(e) {
  if (e.target.textContent === "Log") {
    setval(text)
  setstyle("black")
  }
 else if (e.target.textContent === "Warn") {
  setval(text)
  setstyle("yellow")
 }
 else{
  setval(text)
  setstyle("red")
 }
 }

  return (
   <>
<input type="text" value={text} onChange={(e)=>changFunc(e)}/>
<button onClick={(e)=>logFunc(e)}>Log</button>
<button onClick={(e)=>logFunc(e)}>Warn</button>
<button onClick={(e)=>logFunc(e)}>Error</button>
<p style={{color : style}}>{val}</p>

   </>
  );
}

export default App;
