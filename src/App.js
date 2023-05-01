import './App.css';

function App() {
  
  
  return (
    <div className="App">
      <h1 className="heading">Background Colour Changer</h1>
      <p>Click the button below to change the background</p>
      <button id="backgroundBtn">click me</button>
    </div>
  );
}

const btn = document.querySelector("button");
const body = document.querySelector("body");
btn.addEventListener("click", colour_changer);
body.style.backgroundColor = "";

function colour_changer() {
  

  let r = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  
  return body.style.backgroundColor = "rgb(" + r + "," + b + "," + g + ")";
}

export default App;
