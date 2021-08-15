// import functions and grab DOM elements
const noun1Input = document.getElementById('noun-1input');
const adj1Input = document.getElementById('adj-1input');
const verb1Input = document.getElementById('verb-1input');
const noun2Input = document.getElementById('noun-2input');
const submitButton = document.getElementById('submit');
const noun1Output = document.getElementById('noun-1output');
const adj1Output = document.getElementById('adj-1output');
const verb1Output = document.getElementById('verb-1output');
const noun2Output = document.getElementById('noun-2output');
const song = document.querySelector('.song');
const resetButton = document.getElementById('reset');
const gameScore = document.getElementById('gameCounter');

// initialize state
let gameCounter = 0
// console.log(noun1Input, adj1Input, verb1Input, noun2Input, submitButton, noun1Output, adj1Output, noun2Output, verb1Output, song, resetButton);

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
submitButton.addEventListener('click',()=>{
  if (noun1Input.value !== "" 
    && noun2Input.value !== "" 
    &&  adj1Input.value !== "" 
    && verb1Input.value !== "") {
  noun1Output.textContent = noun1Input.value;
  adj1Output.textContent = adj1Input.value;
  verb1Output.textContent = verb1Input.value;
  noun2Output.textContent = noun2Input.value;
  song.style.visibility = 'visible';
  //State Management
  gameCounter++;
  gameScore.textContent = gameCounter;
  }
  else {
    alert('Please fill out all fields.');
  }
})

// Resets game without loosing state.
resetButton.addEventListener('click',()=>{
  // window.location.reload();
  song.style.visibility = 'hidden';
  noun1Input.value = ""; 
  noun2Input.value = "";
   adj1Input.value = ""; 
  verb1Input.value = "";
});