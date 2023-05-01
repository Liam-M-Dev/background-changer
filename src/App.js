import React from 'react';
import './App.css';
import colour_changer from './button-logic';



function App() {
  React.useEffect(() => {
  document.querySelector("button").addEventListener("click", colour_changer)
  })
  
  return (
    <div className="App">
      <h1 className="heading">Background Colour Changer</h1>
      <p>Click the button below to change the background</p>
      <button>click me</button>
    </div>
  );
  
}




export default App;
