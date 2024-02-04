
const time = [0, 0, 0];
let lapTime = [0, 0, 0];

const logs = [];
let index = 0;

function updateTime(){
  time[2] += 1;
  lapTime[2] += 1;

  if (time[2] === 100){
    time[2] = 0;
    time[1] += 1;
  }
  if (lapTime[2] === 100){
    lapTime[2] = 0;
    lapTime[1] += 1;
  }
  if (time[1] === 60){
    time[1] = 0;
    time[0] += 1;
  }
  if (lapTime[1] === 60){
    lapTime[1] = 0;
    lapTime[0] += 1;
  }
  updateTimerHTML();
  updateLapTimerHTML();
}

function addZeroToSingle(number){
  return (10 > number) ? "0"+number : number;
}

function updateTimerHTML(){
  document.querySelector('.js-min').innerHTML = `${addZeroToSingle(time[0])}`;
  document.querySelector('.js-sec').innerHTML = `${addZeroToSingle(time[1])}`;
  document.querySelector('.js-hundredthSec').innerHTML = `${addZeroToSingle(time[2])}`;
}

function updateLapTimerHTML(){
  document.querySelector('.js-lapNumber').innerHTML = `Lap ${logs.length+1}`;
  document.querySelector('.js-lapMin').innerHTML = `${addZeroToSingle(lapTime[0])}`;
  document.querySelector('.js-lapSec').innerHTML = `${addZeroToSingle(lapTime[1])}`;
  document.querySelector('.js-lapHundredthSec').innerHTML = `${addZeroToSingle(lapTime[2])}`;
}

function updateLog(){
  const timeOfLap = logs[index]; 
  const html = `
    <div class="">
      <p class="lapNumber loggedLapNumber">Lap ${index+1}</p>
      <p class="lapTimer">
        <span class="loggedMin">${addZeroToSingle(timeOfLap[0])}</span> :
        <span class="loggedSec">${addZeroToSingle(timeOfLap[1])}</span> .
        <span class="loggedHundredthSec">${addZeroToSingle(timeOfLap[2])}</span>
      </p>
    </div>`;
  index++;
  document.querySelector('.innerContainer').innerHTML = html + document.querySelector('.innerContainer').innerHTML;
}

let lowest = [0, 0, 0];

function updateLowest(){
  logs.forEach((lap, index) => {
    if (lowest[0] > lap[0]){
      
    } else if (lowest[0] == lap[0]){

    } 
  })
}

let highest = [0,0,0];





