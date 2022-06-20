let i=0;
let text = 'Fizzy-Pop';
let title = '';
let mousePressed = false;
let neon = 1;

const DEFAULT_SIZE = 16;

const fizzy_box = document.getElementById('fizzy_box')
const title_box = document.getElementById('title')
const up = document.getElementById('up');
const down = document.getElementById('down');
const button = document.getElementById('letsGo');
const sperk_box = document.getElementById('sperk')

function type() {
  if ( i < text.length ) {
    title = title.concat(text[i]);
    document.getElementById("title").innerText = title;
    i++;
    setTimeout(type, 75);
  }
}

function reset(){
  fizzy_box.innerHTML = '';
  document.getElementById("popup").classList.remove('hide');
}

function startUp(){
  document.getElementById("popup").classList.add('hide');
  let resolution = document.getElementById("myRange").value;
  // Set grid size
  fizzy_box.style.gridTemplateColumns = `repeat(${resolution}, 1fr)`;
  fizzy_box.style.gridTemplateRows = `repeat(${resolution}, 1fr)`;
  // Create and place items
  for(i=0; i < resolution ** 2; i++){
    const fuzzyItem = document.createElement('div');
    fuzzyItem.classList.add('Fuzzy_Item');
    fuzzyItem.style.backgroundColor = 'black';
    fuzzyItem.addEventListener('mouseover', setColor)
    fuzzyItem.addEventListener('mousedown', setColor)
    fizzy_box.appendChild(fuzzyItem);
  }
}

function setColor(e){
  if(e.type === 'mouseover' && mousePressed == false){return}
  if(neon == 1){
    let color = setNeon();
    e.target.style.backgroundColor = color;
  }else{
    let R = give_me_the_rainbow();
    let G = give_me_the_rainbow();
    let B = give_me_the_rainbow();
    e.target.style.backgroundColor =`rgb(${R},${G},${B})`;
  }
}

function give_me_the_rainbow(){
  return (1 + Math.floor(Math.random()*255)); // Anything but pure black.
}

function setNeon(){
  let x = 1 + Math.floor(Math.random()*4);
  if(x == 4){
    return '#fff';
  }else if(x==3){
    return '#ff0';
  }else if(x==2){
    return '#f0f';
  }else if(x==1){
    return '#0ff';
  }
}
/*

When clicking the spock hand, it will pop up the requested prompt, where you can type in 1 to 100.
Might also do the same thing for the title.

*/

button.addEventListener( 'click', startUp );
title_box.addEventListener( 'click', reset );
document.body.onmousedown = () => (mousePressed = true);
document.body.onmouseup = () => (mousePressed = false);
sperk_box.addEventListener( 'click', reset );

window.onload = type();
