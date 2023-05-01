

export default function colour_changer() {
  const body = document.querySelector("body");

  let r = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  
  return body.style.backgroundColor = "rgb(" + r + "," + b + "," + g + ")";
}